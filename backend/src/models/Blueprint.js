const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["text", "date", "signature", "checkbox"],
      required: true
    },
    position: {
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    }
  },
  { _id: false }
);

const BlueprintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    fields: {
      type: [FieldSchema],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blueprint", BlueprintSchema);
