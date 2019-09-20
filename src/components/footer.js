import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data2 = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data2.site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

export default Footer
