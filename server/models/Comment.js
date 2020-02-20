import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Comment = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    log: { type: ObjectId, ref: "Log", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;