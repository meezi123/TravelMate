import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    pricePerPerson: { type: Number, required: true },
    rating: { type: Number, default: 4.5 },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
