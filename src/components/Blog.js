import React, { useState, useEffect } from "react"
import { getPosts } from "./utils"
import BlogCard from "./BlogCard"
import Spinner from "./Spinner"

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => setPosts(await getPosts())
    fetchData()
  }, [])

  return posts ? (
    <div>
      {posts.map((post) => {
        return <BlogCard key={post.id} post={post} />
      })}
    </div>
  ) : (
    <Spinner />
  )
}

export default Blog
