import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const HackyThings: React.FC<PageProps> = () => {
  const pStyle: React.CSSProperties = {textAlign: 'justify', marginBottom: '1rem'};
  const anchorClass =  `bg-gradient-to-t from-[#bbbbff] to-transparent hover:from-black hover:to-black dark:from-transparent dark:to-transparent px-2 pb-2 text-purple-800 hover:text-yellow-200 dark:text-[#9999ff] hover:dark:text-[#9999ff] font-bold underline`
  const anchorAttributes = `class="${anchorClass}" target="_blank" rel="noopener noreferrer"`


  const aboutP1 =`On a time multiplatform mobile development was still evolving and I had a short budget(in my country a MAC was particularly expensive), I managed to deliver two apps to Apple app store. Having a Mac on that time was almost mandatory to this purpose, even if you were on hybrid app development, which was my case. I couldn't afford a Mac but I could bypass this rule by using a CI/CD platform as an environment for building and testing my app. It was a considerable hack, since the original CI/CD purpose is deploying for production, and not being used as a development environment. Also their API rate limit allowed me to do it virtually for free. The mentioned CI/CD platform was <a href="https://bitrise.io" ${anchorAttributes}>Bitrise</a> and apps were <a href="https://www.guru.com/portfolio/featured-food-delivery-platform/1342350" ${anchorAttributes}>Aiboo Delivery</a> and <a href="https://www.guru.com/portfolio/magician-app/1342342" ${anchorAttributes}>Now Magic</a>`;
  const aboutP2 = `For ethical purposes, in this section, I won't refer to the particular jobs links. Some of the jobs I have developed required me to reverse engineer mobile and web clients to discover about API services, both because lack of documentation or public official API`;
  const aboutP3 = `Sports Betting platforms usually have the requirement to fetch odds data for matches and it costs them a significant amount to their budget to hire an API provider. I have once developed a system that scrapped data from competitors by using PHP+selenium in a trustable way for less than 5$/month. He was a small player in the market and it allowed him to have a chance to thrive`
  const aboutP4 = `Technology came to improve people's life. Developers, as technology producers, should enhance their lifes too. Throughout my career, I have bumped with desktop automation and keyboard mapping and have been powering up my standard QWERTY keyboard to improve my life as a developer. Some of the features  include mouse wheel and middle mouse button capabilities, changing selected word case, better support to characters such as backslash, forward slash, vertical bar and question mark. The current technology used is <a href="https://www.autohotkey.com/" ${anchorAttributes}>Auto Hot Key</a> and the gist for my keyboard mappings is <a href="https://gist.github.com/milseg/6d0a593c91c549596a259ef5ab4aa86b" ${anchorAttributes}>here</a>`
  const aboutP5 = `Big techs have done a good job delivering amazing products to the Market, but they did that at the cost of collecting massive user data and intruding into their lifes. In this context, I think cyberdefense and user sovereignty have become increasingly important and scarce commodities. Also, some people might feel more comfortable and empowered by having more control over their applications and personal data. As such, I am currently in the process of developing my own personal cloud to depend less on big tech services. I plan to share more about this in the future. As of time of writing(2024-05-10), there are some promising applications that could help achieve this goal, such as <a href="https://casaos.io/" ${anchorAttributes}>CasaOS</a>`

  return (
    <Layout>
      <div className="w-full flex flex-row items-start justify-center">
        <div className="flex-col justify-start items-start w-[95%] md:w-[80%] mt-[-20px]">
          {/* <h1 className="text-4xl text-center w-full font-bold dark:text-zinc-300 pb-5 block md:hidden">Workana</h1> */}
          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1">Apple Bypassing</h1>
          <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP1 }}></p>

          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">Reverse Engineering</h1>
          <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP2 }}>
          </p>

          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">Web Hacking</h1>
          <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP3 }}>
          </p>

          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">Personal Hackings</h1>
          <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP4 }}>
          </p>

          <h1 className="text-xl font-bold dark:text-zinc-300 pb-1 pt-2">Future</h1>
          <p className="dark:text-zinc-300" style={pStyle} dangerouslySetInnerHTML={{ __html: aboutP5 }}>
          </p>



          {/* <p className="dark:text-zinc-300" style={pStyle}> */}
          {/*   Also, I never left being a service supplier to the software development industry, solving dozens of Clients and Employers projects which ranged from platform development, mobile app development, workflow automation, bots develoment to web3 smart contracts engineering, as you can see in my <Link to="/portfolio" className={anchorClass} title="Milton Portfolio">portfolio</Link>. */}
          {/* </p> */}
        </div>
      </div>
    </Layout>
  )
}

export default HackyThings


export const Head: HeadFC = () => <Seo pageTitle="Hacky Things" />


