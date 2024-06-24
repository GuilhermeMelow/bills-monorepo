import express from "express";
import { callMe } from "../../features/src";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const result = await callMe();

  console.log(result);

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
