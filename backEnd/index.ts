import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
