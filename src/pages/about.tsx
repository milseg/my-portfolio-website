import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'


const AboutPage: React.FC<PageProps> = () => {
  const pStyle: React.CSSProperties = {textAlign: 'justify', marginBottom: '1rem'};
  const anchorClass = `bg-gradient-to-t from-[#bbbbff] to-transparent hover:from-black hover:to-black dark:from-transparent dark:to-transparent px-2 pb-2 text-purple-800 hover:text-yellow-200 dark:text-[#9999ff] hover:dark:text-[#9999ff] font-bold underline`


  const aboutP1 = `10 years career taking part in many ventures. I founded, together with three other partners, one of the most prominent food delivery platforms in Brazil a couple of years ago. We have been one of the major platforms in one of Brazil's states. It still exists today under other business administration, leaving a lot of our original structure. You can check out the app at <a href="https://play.google.com/store/apps/details?id=com.aiboo.food" class="${anchorClass}" title="Aiboo Delivery Play Store">Play Store</a> or <a href="https://apps.apple.com/br/app/aiboo-delivery-de-comida/id1133000808" class="${anchorClass}" title="Aiboo App Store">App Store</a>.`;
  // const aboutP2 = `Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation developer, bots develoment to web3 smart contracts engineering as you can see in my <a href="/portfolio" style="${anchorStyle}" title="Milton Portfolio">portfolio</a>`;

  return (
    <Layout>
      <div className="w-full flex flex-row items-start justify-center">
        <div className="flex-col justify-start items-start w-[95%] md:w-[80%] mt-[-20px]">
          <h1 className="text-4xl text-center w-full font-bold dark:text-zinc-300 pb-5 block md:hidden">About Me</h1>
          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1">Tagline</h1>
          <p className="dark:text-zinc-300" style={pStyle}>Premier Client Satisfaction</p>

          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">History</h1>
          <p className="dark:text-zinc-300 flex-row justify-between" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP1 }}>
          </p>
          <p className="dark:text-zinc-300" style={pStyle}>
            Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation, bots develoment to web3 smart contracts engineering, as you can see in my <Link to="/portfolio" className={anchorClass} title="Milton Portfolio">portfolio</Link>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage


export const Head: HeadFC = () => <Seo pageTitle="About Me" />
