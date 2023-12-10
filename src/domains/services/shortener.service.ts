import { ShortenerModel } from "../models/shortener.model";
import { ShortenerInput } from "../../shared/inputs/models";

const create = async (input: ShortenerInput) => {
  return await ShortenerModel.create(input);
};

export default { create };
