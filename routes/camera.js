const express = require("express");
const router = express.Router();
const multer = require("multer");

// // Include dependences
const fs = require("fs");

const upload = multer();

// Function for create file static with filename and content.
const saveFile = async (file) =>
  new Promise((resolve, reject) =>
    fs.writeFile(
      "./public/src/uploads" + file.originalname,
      file.buffer,
      (err) =>
        err
          ? reject("An error occurred: " + err.message)
          : resolve({ uploaded: true })
    )
  );

// Endpoint Upload.
router.post("/upload", upload.single("photo"), async (req, res, next) => {
  console.log("que soy", req.file);

  // Control for get file on request.
  if (!req.file) res.send("Cannot find file on request");

  // Try create local file with content.
  try {
    req.body = await saveFile(req.file);
  } catch (err) {
    console.log(err);
    res.send(err, 500);
  }
});

router.get("/a", async (req, res, next) => {
  try {
    console.log("ESTOY LLEGANDO");
  } catch (e) {
    console.log("error");
  }
});

// // add the router to our app
// app.use(router.routes());
// app.use(router.allowedMethods());

// // Run
// app.listen(3000);
module.exports = router;
