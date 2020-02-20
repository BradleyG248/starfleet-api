import mongoose from "mongoose";
import Log from "../models/Log";

const _repository = mongoose.model("Log", Log);

class LogsService {
  async getById(id) {
    return await _repository.find({ id })
      .populate("ship");
  }
  async getLogsByAuthor(author) {
    return await _repository.find({ author })
      .populate("ship");
  }
  async edit(author, id, update) {
    let log = await _repository.findById(id)
    // @ts-ignore
    if (log.author == author) {
      return await _repository.findByIdAndUpdate(id, update, { new: true });
    }
    return "You're not the author!";
  }
  async create(author, log) {
    log.author = author;
    return await _repository.create(log);
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getShipByLogId(shipId) {
    return await _repository.find({ shipId })
  }
  async getAll() {
    return await _repository.find({})
      .populate("ship");
  }
}

const logsService = new LogsService();
export default logsService;
