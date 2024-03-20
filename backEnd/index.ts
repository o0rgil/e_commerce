import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "./config/connectToDB";

import { router } from "./routers/productRoute";

const app = express();

dotenv.config();
connectToDb();
const PORT = 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log("application running at: http://localhost:" + PORT);
});

// app.post("/productCreate", async (req, res) => {
//   const { productName, description, price, categoryId, qty } = req.body;
//   console.log("req.body", req.body);
// });

module.exports.app;
