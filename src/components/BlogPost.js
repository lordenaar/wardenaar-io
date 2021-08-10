import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CircularProgress, Fab, Paper } from "@material-ui/core"
import { getPost } from "./utils"
import ArrowBack from "@material-ui/icons/ArrowBack"
import Markdown from "markdown-to-jsx"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"

const BlogPost = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => setPost(await getPost(id))
    fetchData()
  }, [id])

  const BlogImage = (image) => (
    <img
      style={{ width: "100%", maxWidth: `${image.width}px` }}
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

  const CodeBlock = ({ children }) => {
    console.log(children)
    const codeByLines = children[0].props.children.split("\n")
    const declaredLanguage = codeByLines[0]
    const codeText = codeByLines.slice(1).join("\n")

    return (
      <SyntaxHighlighter
        customStyle={{
          display: "flex",
          position: "relative",
          width: "auto",
          borderRadius: "5px",
          padding: "0px",
          opacity: "90%",
        }}
        language={declaredLanguage}
        style={darcula}
      >
        {codeText}
      </SyntaxHighlighter>
    )
  }

  const processText = (text) => {
    return text
      .replace('<pre class="wp-block-code"><code>', "<pre>")
      .replace("</code></pre>", "</pre>")
  }

  post && console.log(post.content?.rendered)
  return post ? (
    // <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <>
      <Paper
        style={{ width: "88%" }}
        dangerouslySetInnerHTML={{
          __html: `<div><h1>${post.title?.rendered}</h1><br/>${post.content?.rendered}</div>`,
        }}
      >
        {/* <Markdown
          children={processText(post.content?.rendered)}
          options={{
            // disableParsingRawHTML: true,
            overrides: {
              img: BlogImage,
              pre: CodeBlock,
              code: InlineCode,
            },
          }}
        /> */}
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
        <Fab
          color="primary"
          aria-label="back"
          onClick={() => history.push("/blog")}
        >
          <ArrowBack />
        </Fab>
      </div>
    </>
  ) : (
    // </div>
    <CircularProgress />
  )
}

export default BlogPost
