const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
// // Include dependences
const fs = require("fs");

const upload = multer();

//OCR
const { createWorker } = require("tesseract.js");

// Function for create file static with filename and content.
const saveFile = async (file) =>
  new Promise((resolve, reject) =>
    fs.writeFile(
      "./public/src/uploads/" + file.originalname,
      file.buffer,
      (err) =>
        err
          ? reject("An error occurred: " + err.message)
          : resolve({ uploaded: true })
    )
  );

// Endpoint Upload.
router.post("/upload", upload.single("photo"), async (req, res, next) => {
  // Control for get file on request.
  if (!req.file) res.send("Cannot find file on request");

  // Try create local file with content.
  try {
    req.body = await saveFile(req.file);
    // console.log(req.file.originalname);

    const worker = createWorker({
      langPath: path.join(__dirname, "./public/src", "lang-data"),
      logger: (m) => console.log(m),
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text },
      } = await worker.recognize(
        path.join("./public/src/uploads", req.file.originalname)
      );
      console.log(text);
      //getting total and name of the place
      const data = `${text}`;
      const splitData = data.split(/\n/);
      const name = splitData[0];
      const total = splitData.find((element) =>
        element.toUpperCase().includes("TOTAL")
      );
      await worker.terminate();
      console.log("NAME:", name);
      console.log("TOTAL", total);
    })();
  } catch (err) {
    console.log(err);
    res.send(err, 500);
  }
});

// // add the router to our app
// app.use(router.routes());
// app.use(router.allowedMethods());

// // Run
// app.listen(3000);
module.exports = router;
