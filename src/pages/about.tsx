import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'


const AboutPage: React.FC<PageProps> = () => {
  const pStyle: React.CSSProperties = {textAlign: 'justify', marginBottom: '1rem'};
  const anchorStyle: string = "color:#9999ff; text-decoration: none; font-weight: bold; cursor: pointer;"
  const anchorStyleJsx: React.CSSProperties = {color:"#9999ff", textDecoration: "none", fontWeight: "bold", cursor: "pointer"}

  const aboutP1 = `10 years career taking part in many ventures. I founded, together with three other partners, one of the most prominent food delivery platforms in Brazil a couple of years ago. We have been one of the major platforms in one of Brazil's states. It still exists today under other business administration, leaving a lot of our original structure. You can check out that app at <a href="https://play.google.com/store/apps/details?id=com.aiboo.food" style="${anchorStyle}" title="Aiboo Delivery Play Store">Play Store</a> or <a href="https://apps.apple.com/br/app/aiboo-delivery-de-comida/id1133000808" style="${anchorStyle}" title="Aiboo App Store">App Store</a>.`;
  // const aboutP2 = `Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation developer, bots develoment to web3 smart contracts engineering as you can see in my <a href="/portfolio" style="${anchorStyle}" title="Milton Portfolio">portfolio</a>`;

  return (
    <Layout>
      <div className="flex-col justify-start items-start w-full mt-[-20px]">
        <h1 className="text-xl font-bold dark:text-zinc-300 pb-1">Tagline</h1>
        <p className="dark:text-zinc-300" style={pStyle}>Premier Client Satisfaction</p>

        <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">History</h1>
        <p className="dark:text-zinc-300 flex-row justify-between" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP1 }}>
        </p>
        <p className="dark:text-zinc-300" style={pStyle}>
          Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation, bots develoment to web3 smart contracts engineering, as you can see in my <Link to="/portfolio" style={anchorStyleJsx} title="Milton Portfolio">portfolio</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage


export const Head: HeadFC = () => <Seo pageTitle="About Me" />
