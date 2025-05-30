import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  filename: String,
});

export default mongoose.model("users", userSchema);
