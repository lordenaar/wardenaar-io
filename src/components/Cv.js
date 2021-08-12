import React, { useState } from "react"
import Spinner from "./Spinner"

const CV = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginBottom: "0.9em",
        overflow: "scroll",
        borderRadius: "8px",
        willChange: "transform",
        margin: "20px 0 0 0",
      }}
    >
      <iframe
        title="cv"
        loading="lazy"
        onLoad={() => setLoading(false)}
        style={{
          filter: loading ? "blur(10px)" : "blur(0)",
          display: "flex",
          width: "100vw",
          maxWidth: "25cm",
          height: "153vw",
          maxHeight: "36.5cm",
          top: "0",
          left: "0",
          border: "none",
          padding: "0",
        }}
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEiXMTIQtQ&#x2F;view?embed"
      />
      {loading && <Spinner />}
    </div>
  )
}

export default CV
