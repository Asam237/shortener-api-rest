import { ShortenerModel } from "../models/shortener.model";
import { ShortenerInput } from "../../shared/inputs/models";

const create = async (input: ShortenerInput) => {
  return await ShortenerModel.create(input);
};

const findAll = async () => {
  return await ShortenerModel.find({});
};

export { create, findAll };
