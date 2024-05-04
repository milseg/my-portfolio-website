import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'
import Linktree from '../components/linktree'



const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-start gap-2 w-full">
        <h2 className="text-xs font-bold text-zinc-900 dark:text-white">My Linktree</h2>
        <Linktree />
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <Seo pageTitle="Portfolio Page" />


