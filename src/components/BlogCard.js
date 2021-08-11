import React from "react"
import { useHistory } from "react-router-dom"
import { useSpring, animated, config } from "react-spring"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core"

const BlogCard = ({ post, image }) => {
  const history = useHistory()
  const [hoverProps, set] = useSpring(() => ({
    transform: "translate(0px, 0px)",
    boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.30)",
  }))
  const updateHover = (hovering) => ({
    transform: `translate(${hovering ? "5px, -2px" : "0px, 0px"})`,
    boxShadow: `0px ${
      hovering ? "20px 20px" : "10px 10px"
    } 0px rgba(0, 0, 0, 0.3)`,
    config: config.stiff,
  })
  const AnimatedCard = animated(Card)
  return (
    <Grid item xs={12} sm={8} md={4} key={post.id}>
      <AnimatedCard
        onClick={() => history.push(`/blog/${post.id}`)}
        style={{
          maxWidth: 345,
          margin: "3rem auto",
          textAlign: "left",
          ...hoverProps,
        }}
        onMouseEnter={() => set(updateHover(true))}
        onMouseLeave={() => set(updateHover(false))}
        onScroll={() => set(updateHover(false))}
      >
        <CardActionArea>
          <CardMedia component="img" alt="post 1" height="140" image={image} />
          <CardContent>
            <Typography
              dangerouslySetInnerHTML={{
                __html: post.title?.rendered,
              }}
              variant="h5"
              gutterBottom
            />
            <Typography
              dangerouslySetInnerHTML={{
                __html: post.excerpt?.rendered,
              }}
              variant="body2"
              color="textSecondary"
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </CardActions>
      </AnimatedCard>
    </Grid>
  )
}

export default BlogCard
