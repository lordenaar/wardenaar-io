import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card style={{ margin: "20px" }}>
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <Typography
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
