import express from "express";
import Blog from "../models/blogs.js";
import * as logger from "../utils/logger.js"

const BlogRouters = express.Router();

BlogRouters.get("/", (request, response) => {

  logger.info("accept request")
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

BlogRouters.post("/", (request, response) => {
  logger.info(`accept body ${request.body}`)

  const blog = new Blog(request.body)
  blog.save().then((result) => {
    response.status(201).json(result)
  })
})

export default BlogRouters;
