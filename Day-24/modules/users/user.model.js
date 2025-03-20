// DataBase connection (Schema + Model)

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    roles: { type: [String], enum: ["admin", "user"], default: ["user"] },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

module.exports = new model("User", userSchema);
