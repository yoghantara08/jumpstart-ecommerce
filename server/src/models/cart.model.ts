import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: {
    type: [cartItemSchema],
  },
});

// const newCartItem = {
//   product: product._id,
//   quantity: 1
// };

// const cart = await Cart.findOneAndUpdate(
//   { userId: userId },
//   { $push: { items: newCartItem } },
//   { new: true, upsert: true }
// );

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
