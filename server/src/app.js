import express from "express";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  }),
);

import { customerRouter } from "./routes/customer.route.js";

//routes
app.use("/api/customer", customerRouter);
