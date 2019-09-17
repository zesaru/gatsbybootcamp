import React from "react"
import { List, Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>
        I'm Andrew, a full-stack developers living in beatifull Philadelphia
      </h2>
      <p>
        Need a developers ? <Link to="/contact">Contact me</Link>
      </p>
    </div>
  )
}

export default IndexPage
