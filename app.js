import express from "express";
import BlogRouters from "./controllers/blogs.js";

const app = express()

app.use(express.json())



app.use('/api/blogs', BlogRouters)


export default app;