export const dummy = (blogs) => {
  return 1
}

export const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

export const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const favorite = blogs.reduce((best, current) => {
    return current.likes > best.likes ? current : best
  }, blogs[0])

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

export const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const countsByAuthor = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1
    return acc
  }, {})

  return Object.entries(countsByAuthor).reduce(
    (top, [author, count]) => (count > top.blogs ? { author, blogs: count } : top),
    { author: '', blogs: -1 }
  )
}

export const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const likesByAuthor = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes
    return acc
  }, {})

  return Object.entries(likesByAuthor).reduce(
    (top, [author, likes]) => (likes > top.likes ? { author, likes } : top),
    { author: '', likes: -1 }
  )
}