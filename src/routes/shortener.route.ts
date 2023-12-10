import { Router } from "express";
import * as shortenerController from "../controllers/shortener.controller";

const ShortenerRoute = () => {
  const router = Router();
  const prefix: string = "/shorteners";
  router.post(`${prefix}/create`, shortenerController.create);
  router.post(`${prefix}`, shortenerController.redirectShortener);
  return router;
};

export { ShortenerRoute };
