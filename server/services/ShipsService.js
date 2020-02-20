import mongoose from "mongoose";
import Ship from "../models/Ship";

const _repository = mongoose.model("Ship", Ship);

class ShipsService {
  async getById(id) {
    return await _repository.find({ id });
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async create(ship) {
    return await _repository.create(ship);
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getAll() {
    return await _repository.find({});
  }
}

const shipsService = new ShipsService();
export default shipsService;
