import mongoose from "mongoose";
import { Schema } from "mongoose";
const Bookings = new Schema({
  country: { type: String, required: true },
  place: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  travelers: { type: Number, required: true },
  roomType: { type: String, required: true },
  total: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
export const Booking = mongoose.model("Bookings", Bookings);
