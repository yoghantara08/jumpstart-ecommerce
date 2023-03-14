import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
    },
    condition: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    addedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
