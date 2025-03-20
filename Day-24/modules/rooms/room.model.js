const { Schema, model, Types } = require("mongoose");

const roomSchema = new Schema(
  {
    room_id: {
      type: Number,
      required: true,
      unique: true,
    },
    room_number: {
      type: String,
      required: true,
    },
    room_type: {
      type: String,
      required: true,
      enum: ["Single", "Double", "Suite", "Deluxe"], // Optional: Restrict room types
    },
    bed_type: {
      type: String,
      enum: ["King", "Queen", "Twin", "Full"], // Optional
    },
    price_per_night: {
      type: Number, // Use Number instead of Decimal
      required: true,
    },
    is_available: {
      type: Boolean,
      required: true,
      default: true,
    },
    description: {
      type: String, // Use String instead of Text
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = model("Room", roomSchema);
