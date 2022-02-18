const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  putData,
  patchData,
  deleteData,
} = require("./controllers");

router.get("/", getData);

router.post("/post", postData);

router.put("/:id", putData);

router.patch("/:id", patchData);

router.delete("/:id", deleteData);

module.exports = router;
