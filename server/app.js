import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.use((req, res, next) => {
  res.send("second middleware");
});

app.listen(3000);
