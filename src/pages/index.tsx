import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import PortfolioItems from '../components/portfolio-items'



const IndexPage: React.FC<PageProps> = () => {
  const sls = React.useMemo(() => [
    {
      href: 'https://www.linkedin.com/in/milton-correia-01b1326b/',
      icon: 'linkedin.svg',
      title: 'Linkedin',
      size: 'w-10 h-10'
    },
    {
      href: 'https://github.com/milseg?tab=repositories',
      icon: 'github.svg',
      title: 'Github',
      size: 'w-10 h-10'
    },
    {
      href: 'https://x.com/miltonseg',
      icon: 'x.svg',
      title: 'X',
      size: 'w-10 h-10'
    },
    {
      href: 'https://www.upwork.com/freelancers/~0135aba5697d706763',
      icon: 'upwork.svg',
      title: 'Upwork',
      size: 'w-10 h-10'
    },
    {
      href: 'https://njump.me/npub1vyfd0xhdlf0fhdsn34ernszep05crsmkq0r8mm3l0pn8fh4hgvdsahr9vw',
      icon: 'nostr.svg',
      title: 'Nostr',
      size: 'w-11 h-11'
    },
  ], []);
  return (
    <Layout>
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start w-full">
        <StaticImage src="../images/profile-pic-green-trees.jpg" alt="Milton" className="rounded-full mb-4 md:mr-4 w-[200px] h-[200px] z-0" />
        <div>
          <h1 className="text-4xl font-bold text-[#000] dark:text-zinc-300">Hey, I'm Milton.</h1>
          <p className="text-xl mb-6 dark:text-zinc-300">Full Stack Developer</p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-2 w-full mt-[-50px]" id="portfolio">
        <h2 className="text-xs font-bold text-zinc-900 dark:text-white">My portfolio</h2>
        <PortfolioItems />
      </div>
      <div className="flex flex-col justify-start gap-2 w-full">
        <h2 className="text-xs font-bold text-[#000] dark:text-white">Social Links</h2>
        <div className="flex flex-row w-full justify-start items-center gap-4">
          <a href={sls[0].href} target="_blank" rel="noopener noreferrer" className="bg-[#9999ff] hover:bg-[#bbbbff] dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-500 hover:cursor-pointer w-full aspect-square rounded-xl flex items-center justify-center shadow" title={`Milton's ${sls[0].title}`}>
            <StaticImage src={`../images/social-logos/linkedin.svg`} alt={`Milton's ${sls[0].title}`} className={sls[0].size} />
          </a>
          <a href={sls[1].href} target="_blank" rel="noopener noreferrer" className="bg-[#9999ff] hover:bg-[#bbbbff] dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-500 hover:cursor-pointer w-full aspect-square rounded-xl flex items-center justify-center shadow" title={`Milton's ${sls[1].title}`}>
            <StaticImage src={`../images/social-logos/github.svg`} alt={`Milton's ${sls[1].title}`} className={sls[1].size} />
          </a>
          <a href={sls[2].href} target="_blank" rel="noopener noreferrer" className="bg-[#9999ff] hover:bg-[#bbbbff] dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-500 hover:cursor-pointer w-full aspect-square rounded-xl flex items-center justify-center shadow" title={`Milton's ${sls[2].title}`}>
            <StaticImage src={`../images/social-logos/x.svg`} alt={`Milton's ${sls[2].title}`} className={sls[2].size} />
          </a>
          <a href={sls[3].href} target="_blank" rel="noopener noreferrer" className="bg-[#9999ff] hover:bg-[#bbbbff] dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-500 hover:cursor-pointer w-full aspect-square rounded-xl flex items-center justify-center shadow" title={`Milton's ${sls[3].title}`}>
            <StaticImage src={`../images/social-logos/upwork.svg`} alt={`Milton's ${sls[3].title}`} className={sls[3].size} />
          </a>
          <a href={sls[4].href} target="_blank" rel="noopener noreferrer" className="bg-[#9999ff] hover:bg-[#bbbbff] dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-500 hover:cursor-pointer w-full aspect-square rounded-xl flex items-center justify-center shadow" title={`Milton's ${sls[4].title}`}>
            <StaticImage src={`../images/social-logos/nostr.svg`} alt={`Milton's ${sls[4].title}`} className={sls[4].size} />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo pageTitle="Home Page" />
