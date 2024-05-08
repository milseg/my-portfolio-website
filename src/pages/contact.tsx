import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"


const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-row items-center md:justify-start">
        <StaticImage src="../images/linktree/telegram.png" alt="Milton's Telegram" className="rounded-full mr-4 w-14 h-14 border-white border-2" />
        <div className="bg-gradient-to-t from-[#bbbbff] to-transparent hover:from-black hover:to-black dark:from-transparent dark:to-transparent px-2 pb-2">
          <a href="https://t.me/miltondev" target="_blank" className="text-xl mb-6 text-purple-800 hover:text-yellow-200 dark:text-[#9999ff] hover:dark:text-[#9999ff] font-bold underline">t.me/miltondev</a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <Seo pageTitle="Contact Page" />



