import React, { useState, useEffect } from "react"
import { getPosts } from "./utils"
import BlogCard from "./BlogCard"
import Spinner from "./Spinner"
import { Box, Grid } from "@material-ui/core"

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getPosts())
    }
    fetchData()
  }, [])

  return posts.posts ? (
    <Box
      component="div"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Grid container justifyContent="center">
        {posts.posts.map((post) => {
          return <BlogCard key={post.ID} post={post} />
        })}
      </Grid>
    </Box>
  ) : (
    <Spinner />
  )
}

export default Blog
