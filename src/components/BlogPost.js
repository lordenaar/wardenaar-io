import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Fab, Paper } from "@material-ui/core"
import { getPost } from "../utils/utils"
import ArrowBack from "@material-ui/icons/ArrowBack"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Spinner from "./Spinner"
import htmr from "htmr"
import moment from "moment"

const BlogPost = () => {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => setPost(await getPost(slug))
    fetchData()
  }, [slug])

  const BlogImage = (image) => (
    <img
      style={{ width: "100%", maxWidth: `900px`, marginBottom: "3em" }}
      src={image.src}
      alt={image.alt}
    />
  )

  const InlineCode = ({ children }) => (
    <span
      style={{
        display: "inline",
        boxDecorationBreak: "clone",
        fontFamily: "Courier New",
        fontWeight: "bold",
        backgroundColor: "#cfd6d255",
        padding: "1px 3px",
        borderRadius: "4px",
      }}
    >
      {children}
    </span>
  )

  const CodeBlock = ({ children }) => {
    const codeByLines = children[0].split("\n")
    const lang = codeByLines[0]
    const text = codeByLines.slice(1).join("\n")

    return (
      <SyntaxHighlighter
        language={lang}
        style={darcula}
        customStyle={{ borderRadius: "5px" }}
      >
        {text}
      </SyntaxHighlighter>
    )
  }

  const transform = {
    p: ({ children }) => <p className="post">{children}</p>,
    img: BlogImage,
    pre: CodeBlock,
    code: InlineCode,
  }

  const Tag = ({ children }) => (
    <div>
      <h3
        style={{
          backgroundColor: "#00000022",
          boxShadow: "5 5 5 5",
          padding: "7px",
          margin: "7px",
          borderRadius: "12px",
        }}
      >
        {children}
      </h3>
    </div>
  )

  return post ? (
    <>
      <Paper
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px 30px 0",
          }}
        >
          <div
            style={{
              zIndex: "2",
            }}
          >
            <Fab
              color="primary"
              aria-label="back"
              onClick={() => history.goBack()}
            >
              <ArrowBack />
            </Fab>
          </div>
          <div>
            <h3>{moment(post.date).format("DD MMM YYYY")}</h3>
            {/* {Object.keys(post.tags).map((tag) => (
              <Tag>{tag}</Tag>
            ))} */}
          </div>
        </div>

        {htmr(
          `<h1>${
            post.title
          }</h1><div style="padding: 0px 3% 30px; text-align: left">${post.content.replaceAll(
            "<a",
            '<a target="_blank" rel="noopener noreferrer"'
          )}</div>`,
          {
            transform,
          }
        )}
      </Paper>
    </>
  ) : (
    <Spinner />
  )
}

export default BlogPost
