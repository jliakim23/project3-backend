const mongoose = require("../db/connection");

const planSchema = new mongoose.Schema({
    userId: { ref: "User", type: mongoose.Schema.Types.ObjectId }, 
  
    Title: String,
    Description: String,
    startDate: { type: Date, required: true},
    endDate:{ type: Date, required: true},
  },
  {timestamps: true}
  );


const Plan = new mongoose.model("Plan", planSchema);

module.exports = Plan;