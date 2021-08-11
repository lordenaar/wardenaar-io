import React, { useState, useEffect } from "react"
import { getPosts, getMedia } from "./utils"
import BlogCard from "./BlogCard"
import Spinner from "./Spinner"
import { Box, Grid } from "@material-ui/core"

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [media, setMedia] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getPosts())
      setMedia(await getMedia())
    }
    fetchData()
  }, [])

  const getImage = (post) => {
    const image = media.find((img) => img.id === post.featured_media)
    return image
      ? image.media_details.sizes.full.source_url
      : "https://pngimg.com/uploads/trollface/trollface_PNG30.png"
  }

  return posts ? (
    <Box
      component="div"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Grid container justify="center">
        {posts.map((post) => {
          return <BlogCard key={post.id} post={post} image={getImage(post)} />
        })}
      </Grid>
    </Box>
  ) : (
    <Spinner />
  )
}

export default Blog
