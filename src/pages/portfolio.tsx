import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'
import PortfolioItems from '../components/portfolio-items'



const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-start gap-2 w-full" id="portfolio">
        <h2 className="text-xs font-bold text-zinc-900 dark:text-white">My portfolio</h2>
        <PortfolioItems />
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <Seo pageTitle="Portfolio Page" />

