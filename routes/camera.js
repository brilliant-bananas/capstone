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
      langPath: path.join("./public/src", "lang-data"),
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
      console.log("TEXT", text);
      //getting total and name of the place
      const data = `${text}`;
      const splitData = data.split(/\n/);
      const name = splitData[0];

      const subTotal = splitData.find((element) => /subt?otal/i.test(element));
      let subTotalPrice;
      if (subTotal) {
        const subData = subTotal.split(" ");
        const subPrice = subData.find((element) => element[0] === "$");
        if (subPrice) {
          subTotalPrice = Number(subPrice.slice(1));
        } else {
          subTotalPrice = Number(
            subData.find((element) => {
              isNaN(Number(element)) === false;
            })
          );
        }
        const subIndex = splitData.indexOf(subTotal);
        splitData.splice(subIndex, 1);
      }

      const totalData = splitData
        .find((element) => /tot?al/i.test(element))
        .split(" ");
      let totalPrice;
      if (totalData) {
        const price = totalData.find((element) => element[0] === "$");
        if (price) {
          totalPrice = Number(price.slice(1));
        } else {
          totalPrice = Number(
            totalData.find(
              (element) =>
                isNaN(Number(element)) === false && Number(element) !== 0
            )
          );
        }
      }

      await worker.terminate();
      console.log("NAME:", name);
      console.log("subTotal", subTotal);
      console.log("SUBTOTALPRICE", subTotalPrice);
      console.log("totalData", totalData);
      console.log("totalPrice", totalPrice);
    })();
  } catch (err) {
    console.log(err);
    res.send(err, 500);
  }
});

module.exports = router;
