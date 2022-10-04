import express from "express";
import path from "path";

const router = express.Router();

import __dirname from "../helper.js";

// /admin/add-product => get
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

// /admin/add-product => post
router.post("/add-product", (req, res) => {
  res.redirect("/");
});

export default router;
