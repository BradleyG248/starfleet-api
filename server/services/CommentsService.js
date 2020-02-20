import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getById(id) {
    return await _repository.find({ id })
      .populate("log");
  }
  async getCommentsByAuthor(author) {
    return await _repository.find({ author })
      .populate("log");
  }
  async edit(author, id, update) {
    let comment = await _repository.findById(id)
    // @ts-ignore
    if (comment.author == author) {
      return await _repository.findByIdAndUpdate(id, update, { new: true });
    }
    return "You're not the author!";
  }
  async create(author, comment) {
    comment.author = author;
    return await _repository.create(comment);
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getShipByCommentId(shipId) {
    return await _repository.find({ shipId })
  }
  async getAll() {
    return await _repository.find({})
      .populate("log");
  }
}

const commentsService = new CommentsService();
export default commentsService;
