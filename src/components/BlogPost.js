import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Fab, Paper } from "@material-ui/core"
import { getPost } from "./utils"
import ArrowBack from "@material-ui/icons/ArrowBack"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Spinner from "./Spinner"
import htmr from "htmr"

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
      style={{ width: "100%", maxWidth: `550px` }}
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
        padding: "2px 6px",
        borderRadius: "4px",
      }}
    >
      {children}
    </span>
  )

  const processText = (text) => {
    return text
      .replace('<pre class="wp-block-code"><code>', "<customcode>")
      .replace("</code></pre>", "</customcode>")
  }

  const CodeBlock = ({ children }) => {
    const codeByLines = children[0].split("\n")
    const lang = codeByLines[0]
    const text = codeByLines.slice(1).join("\n")

    return (
      <SyntaxHighlighter language={lang} style={darcula}>
        {text}
      </SyntaxHighlighter>
    )
  }

  const transform = {
    img: BlogImage,
    customcode: CodeBlock,
    code: InlineCode,
  }

  return post ? (
    <>
      <Paper
        style={{
          width: "100%",
          maxWidth: "610px",
          margin: "20px 0",
          padding: "30px",
        }}
      >
        {htmr(
          `<h1>${post.title}</h1><div style="text-align: left">${processText(
            post.content
          )}</div>`,
          {
            transform,
          }
        )}
      </Paper>
      <div
        style={{
          width: "85%",
          display: "flex",
          zIndex: "2",
          margin: "50px",
          position: "absolute",
        }}
      >
        <Fab color="primary" aria-label="back" onClick={() => history.goBack()}>
          <ArrowBack />
        </Fab>
      </div>
    </>
  ) : (
    <Spinner />
  )
}

export default BlogPost
