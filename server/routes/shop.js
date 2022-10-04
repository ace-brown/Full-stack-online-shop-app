import express from "express";
import path from "path";

const router = express.Router();

import __dirname from "../helper.js";

export default router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});
