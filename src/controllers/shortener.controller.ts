import { Request, Response } from "express";
import { ShortenerInput } from "../shared/inputs/models";
import { generate } from "shortid";
import * as shortenerService from "../domains/services/shortener.service";
import { BASE_URL } from "../shared/core/config";
import { ShortenerModel } from "../domains/models/shortener.model";

const create = async (req: Request, res: Response) => {
  const { longUrl }: ShortenerInput = req.body;
  if (longUrl === null) res.status(400).json({ message: "empty !!!" });
  const createdShortener = await shortenerService.create({
    longUrl,
    shortUrl: BASE_URL + generate(),
  });
  await createdShortener.save();
  return res.json({ shortener: createdShortener });
};

const redirectShortener = async (req: Request, res: Response) => {
  let shortUrl = req.params.shortUrl;
  ShortenerModel.findOne({ shortUrl: BASE_URL + shortUrl }).then(
    (shortener) => {
      let url = shortener?.longUrl.toString();
      if (shortener === null)
        res.status(400).json({ message: "invalid params" });
      return res.redirect(url);
    }
  );
};

export { create, redirectShortener };
