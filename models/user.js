import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String, // Add this line if you want to include the password field
      required: true, // Add this line if you want to make the password field required
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
