import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <p>
        Contact me
        <a href="https://twitter.com/@zesarum" target="_blank">
          @zesarum
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
