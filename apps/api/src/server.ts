import express from "express";
import { listBills } from "features/src/bills";

const app = express();
const port = 3000;

app.get("/", async (_, res) => {
  const x: any = 1;
  const result = await listBills();

  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
