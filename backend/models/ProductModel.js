import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
  color: { type: [String], required: true },
  images: { type: [String], required: true },
});

export default mongoose.model("Product", ProductSchema);
