import mongoose from "mongoose";
import { EProvider } from "../types/EProvider";
import { ERoles } from "../types/ERoles";

const profileSchema = new mongoose.Schema({
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
});

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
    isFirstLogin: {
      type: Boolean,
    },
    profile: {
      type: profileSchema,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
