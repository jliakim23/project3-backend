const mongoose = require("../db/connection");

const planSchema = new mongoose.Schema(
  {
    userId: { ref: "User", type: mongoose.Schema.Types.ObjectId },

    title: { type: String, required: true },
    description: String,
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    checklist: [{ type: String, checked: Boolean }],
    budget: {
      foodAmount: { type: Number, default: 0 },
      attractionAmount: { type: Number, default: 0 },
      accommodationAmount: { type: Number, default: 0 },
      totalAmount: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Plan = new mongoose.model("Plan", planSchema);

module.exports = Plan;
