import mongoose from "mongoose";

const shortenerSchema: mongoose.Schema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
});

const ShortenerModel = mongoose.model("Shorteners", shortenerSchema);

export { ShortenerModel };
