import mongoose from "mongoose";
import { Schema } from "mongoose";
const receipts = new Schema({
  country: { type: String, required: true },
  place: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  travelers: { type: Number, required: true },
  roomType: { type: String, required: true },
  total: { type: Number, required: true },
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
    unique: true,
  },
});
export const Receipt = mongoose.model("Receipts", receipts);
