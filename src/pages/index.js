import React from "react"
import { List, Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Cesar, a full-stack developers living in beatifull Tokyo</h2>
      <p>
        Need a developers ? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
