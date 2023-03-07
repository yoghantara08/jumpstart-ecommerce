import mongoose from "mongoose";
import { Provider } from "src/types/EProvider";
import { Roles } from "src/types/ERoles";

const accountSchema = new mongoose.Schema(
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
      default: Roles.USER,
    },
    provider: {
      type: String,
      default: Provider.LOCAL,
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
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
