import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import PortfolioItems from '../components/portfolio-items'



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="My profile picture"
        src="../images/profile-pic-green-trees.jpg"
        width={200}
        height={200}
      />
      <PortfolioItems />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo pageTitle="Home Page" />
