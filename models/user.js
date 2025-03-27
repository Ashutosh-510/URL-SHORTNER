import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestapes: true }
);

const User = mongoose.model("user", userSchema);

export default User;
