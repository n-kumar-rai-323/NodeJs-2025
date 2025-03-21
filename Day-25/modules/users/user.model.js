const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    roles: { type: [String], enum: ["admin", "user"], default: ["user"] },
    isActive: { type: Boolean, require: true, default: true },
    image: String,
  },
  { timestamps: true }
);
module.exports = new model("User", userSchema);
