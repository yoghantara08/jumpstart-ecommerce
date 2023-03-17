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

const Cart = mongoose.model("Cart", cartSchema);

Cart.prototype.removeItem = async function (productId: string) {
  const itemIndex = this.items.findIndex((item: any) =>
    item.product.equals(productId)
  );
  if (itemIndex !== -1) {
    this.items.splice(itemIndex, 1);
    await this.save();
  }
};

export default Cart;
