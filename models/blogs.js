import mongoose from "mongoose"

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb+srv://nurildani81_db_user:Jt7l1FGLR5sTw5VJ@cluster0.rwle6fj.mongodb.net/Blog?'
mongoose.connect(mongoUrl, { family: 4 })

export default Blog;