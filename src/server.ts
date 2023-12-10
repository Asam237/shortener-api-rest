import express, { Application } from "express";
import cors from "cors";
import { ShortenerRoute } from "./routes/shortener.route";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerDoc from "./swagger.json";

export const setupRestEndPoints = (app: Application) => {
  const router = express.Router();
  app.use(express.json());
  app.use(cors());
  app.use("/", ShortenerRoute());
  app.use("/", router);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
};
