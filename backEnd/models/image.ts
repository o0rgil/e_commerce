/** @format */

import { Schema, model } from "mongoose";

const ImageSchema: Schema = new Schema({
  imageUrl: { type: String, required: true },
});

const Image = model("Image", ImageSchema);
export default Image;
