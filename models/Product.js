import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "title 은 필수예요."],
      trim: true,
    },
    description: {
      type: String,
      default: false,
    },
    price: {
      type: Boolean,
      default: false,
    },

    tags: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt 자동 생성/갱신
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
