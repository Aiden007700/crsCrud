import dotenv from "dotenv";
dotenv.config();

import container from "./config/container.js";
import express from "express";

const app = container.cradle.expressServer() as express.Application

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
})
