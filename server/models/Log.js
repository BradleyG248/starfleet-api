import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Log = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    ship: { type: ObjectId, ref: "Ship" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;