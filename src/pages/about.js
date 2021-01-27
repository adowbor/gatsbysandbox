import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/section-header"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <SectionHeader headerText="Hello Section"/>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`