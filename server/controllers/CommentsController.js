import express from "express";
import commentsService from "../services/CommentsService";

export default class CommentsController {

  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/author/:author", this.getByAuthor)
      .post("/:author", this.create)
      .put("/:author/:id", this.edit)
      .delete("/:author/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await commentsService.getAll()
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getByAuthor(req, res, next) {
    try {
      let data = await commentsService.getCommentsByAuthor(req.params.author)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await commentsService.delete(req.params.id);
      res.send("deleted")
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await commentsService.create(req.params.author, req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await commentsService.edit(req.params.author, req.params.id, req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await commentsService.getById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
