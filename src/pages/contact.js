import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>
        Contact me
        <a href="https://twitter.com/@zesarum" target="_blank">
          @zesarum
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
