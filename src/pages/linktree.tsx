import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'
import Linktree from '../components/linktree'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <StaticImage src="../images/profile-pic-green-trees.jpg" alt="Milton" className="rounded-full w-[100px] h-[100px] z-0" />
        <div>
          <h1 className="text-xl text-[#000] dark:text-zinc-300 text-center">Hey, I'm Milton.</h1>
          <p className="text-xs dark:text-zinc-300 text-center">Full Stack <Link to="/portfolio" className="underline text-purple-900 dark:text-[#9999ff]">Developer</Link></p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-2 w-full mt-[-40px]">
        <h2 className="text-xs font-bold text-zinc-900 dark:text-white">My Linktree</h2>
        <Linktree />
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <Seo pageTitle="Portfolio Page" />


