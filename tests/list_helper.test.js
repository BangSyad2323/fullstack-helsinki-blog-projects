import { test, describe } from 'node:test'
import assert from 'node:assert'
import { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes } from '../utils/list_helper.js'

const sampleBlogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  }
]

test('dummy returns one', () => {
  const blogs = []
  const result = dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    assert.strictEqual(totalLikes([]), 0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const listWithOneBlog = [sampleBlogs[0]]
    assert.strictEqual(totalLikes(listWithOneBlog), 7)
  })

  test('of a bigger list is calculated right', () => {
    assert.strictEqual(totalLikes(sampleBlogs), 24)
  })
})

describe('favorite blog', () => {
  test('of empty list is null', () => {
    assert.strictEqual(favoriteBlog([]), null)
  })

  test('finds the blog with most likes', () => {
    const result = favoriteBlog(sampleBlogs)
    assert.deepStrictEqual(result, {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })
})

describe('most blogs', () => {
  test('of empty list is null', () => {
    assert.strictEqual(mostBlogs([]), null)
  })

  test('when list has only one blog returns that author with 1 blog', () => {
    const listWithOneBlog = [sampleBlogs[0]]
    assert.deepStrictEqual(mostBlogs(listWithOneBlog), {
      author: 'Michael Chan',
      blogs: 1
    })
  })

  test('finds the author with the most blogs', () => {
    assert.deepStrictEqual(mostBlogs(sampleBlogs), {
      author: 'Edsger W. Dijkstra',
      blogs: 2
    })
  })
})

describe('most likes', () => {
  test('of empty list is null', () => {
    assert.strictEqual(mostLikes([]), null)
  })

  test('when list has only one blog equals that blog likes', () => {
    const listWithOneBlog = [sampleBlogs[0]]
    assert.deepStrictEqual(mostLikes(listWithOneBlog), {
      author: 'Michael Chan',
      likes: 7
    })
  })

  test('finds the author whose blogs have the most likes', () => {
    assert.deepStrictEqual(mostLikes(sampleBlogs), {
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})