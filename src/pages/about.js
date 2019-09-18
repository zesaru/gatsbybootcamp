import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I currently teach full-time on Embassy of Peru.</p>
      <p>
        <Link to="/contact">Want to work with me? </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
