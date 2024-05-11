import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const OtherPortfolioProjects: React.FC<PageProps> = () => {
  const pStyle: React.CSSProperties = {textAlign: 'justify', marginBottom: '1rem'};
  const anchorClass =  `bg-gradient-to-t from-[#bbbbff] to-transparent hover:from-black hover:to-black dark:from-transparent dark:to-transparent px-2 pb-2 text-purple-800 hover:text-yellow-200 dark:text-[#9999ff] hover:dark:text-[#9999ff] font-bold underline`
  const anchorAttributes = `class="${anchorClass}" target="_blank" rel="noopener noreferrer"`


  const aboutP1 =`Besides the projects taken here or documented in my portfolio, I've been involved in several others on similar scopes. I estimate that I have worked on at least 30 to 40 projects in the IT industry, but unfortunately, I didn't document it entirely. For the record, you can find some of these projects on my Workana profile. Only in there, I've executed <a href="https://www.workana.com/freelancer/c4b2a060442c7a643867257a82544571" ${anchorAttributes}>20+ projects</a>. Also, I was rated an average 4.95 stars freelancer in this platform(the maximum possible is 5)`;
  // const aboutP2 = `Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation developer, bots develoment to web3 smart contracts engineering as you can see in my <a href="/portfolio" style="${anchorStyle}" title="Milton Portfolio">portfolio</a>`;

  return (
    <Layout>
      <div className="w-full flex flex-row items-start justify-center">
        <div className="flex-col justify-start items-start w-[95%] md:w-[80%] mt-[-20px]">
          {/* <h1 className="text-4xl text-center w-full font-bold dark:text-zinc-300 pb-5 block md:hidden">Workana</h1> */}
          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1">Other Portfolio Projects</h1>
          <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP1 }}></p>

          {/* <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">History</h1> */}
          {/* <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP1 }}> */}
          {/* </p> */}
          {/* <p className="dark:text-zinc-300" style={pStyle}> */}
          {/*   Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation, bots develoment to web3 smart contracts engineering, as you can see in my <Link to="/portfolio" className={anchorClass} title="Milton Portfolio">portfolio</Link>. */}
          {/* </p> */}
        </div>
      </div>
    </Layout>
  )
}

export default OtherPortfolioProjects


export const Head: HeadFC = () => <Seo pageTitle="Other Portfolio Projects" />

