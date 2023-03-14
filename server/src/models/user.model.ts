import mongoose from "mongoose";
import { EProvider } from "src/types/EProvider";
import { ERoles } from "src/types/ERoles";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: Object.values(ERoles),
      default: ERoles.USER,
    },
    provider: {
      type: String,
      enum: Object.values(EProvider),
      default: EProvider.LOCAL,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    postalCode: {
      type: String,
      default: "",
    },
    birthday: {
      type: Date,
      default: "0000-00-00",
    },
    image: {
      type: String,
    },
    isFirstLogin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
