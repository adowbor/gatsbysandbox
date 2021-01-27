import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/section-header"
import Img from 'gatsby-image'


const IndexPage = props => (
  <Layout>
    
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />

  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/pic1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    imageTwo: file(relativePath: { eq: "images/pic2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;