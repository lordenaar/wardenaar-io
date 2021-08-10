import React, { useState, useEffect } from "react"
import { getPosts } from "./utils"
import BlogCard from "./BlogCard"
import { CircularProgress } from "@material-ui/core"

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => setPosts(await getPosts())
    fetchData()
  }, [])

  return (
    <div>
      {posts ? (
        posts.map((post) => {
          return <BlogCard key={post.id} post={post} />
        })
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Blog
