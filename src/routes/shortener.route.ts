import { Router } from "express";
import * as shortenerController from "../controllers/shortener.controller";

const ShortenerRoute = () => {
  const router = Router();
  const prefix: string = "/shorteners";
  router.get(`/r/:shortUrl`, shortenerController.redirectShortener);
  router.get(`${prefix}`, shortenerController.findAll);
  router.post(`${prefix}`, shortenerController.create);
  return router;
};

export { ShortenerRoute };
