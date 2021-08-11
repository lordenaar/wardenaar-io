import { CircularProgress } from "@material-ui/core"
import React from "react"

const Spinner = () => {
  return (
    <CircularProgress
      size={90}
      thickness={5}
      style={{ position: "absolute", margin: "100px" }}
    />
  )
}

export default Spinner
