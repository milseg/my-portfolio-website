import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData, getImage, StaticImage } from "gatsby-plugin-image"


// type ItemNode = { readonly excerpt: string | null, readonly id: string, readonly frontmatter: { readonly date: string | null, readonly title: string | null } | null, readonly parent: { readonly modifiedTime: string } | {} | null }
// type PortfolioItemsQuery = { readonly allMdx: { readonly nodes: ReadonlyArray<ItemNode> } };
const Linktree = () => (
  <StaticQuery
    query={graphql`
      query Linktree {
        allFile(filter: {sourceInstanceName: {eq: "linktree"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(width: 40, placeholder: BLURRED, formats: AUTO)
              }
              publicURL
            }
          }
        }
      }
    `}
    render={(data: any)  => {
      let lts = [
        {
          href: 'https://www.linkedin.com/in/milton-correia-01b1326b/',
          id: 'github',
          title: 'Linkedin',
          alt: 'Milton\'s Linkedin',
          image: null
        }
      ];

      let igMap: any = {}
      data.allFile.edges.forEach(({node}: any) => {
        igMap[node.relativePath.replace(/\..*$/, '')] = node
      })
      lts = lts.map((el) => {
        el.image = igMap[el.id]
        return el
      })


      return (
        <>
          {
            lts.map((l) => {
              let ig: any = l.image;
              return (
                <div className="bg-[#9999ff] hover:bg-white dark:bg-white dark:hover:bg-transparent p-4 rounded-full shadow flex items-center w-[21.5rem] md:w-[40rem] cursor-pointer border-2 border-purple-800 dark:hover:border-white text-[#000] hover:text-purple-800 dark:text-purple-600 dark:hover:text-white" title={l.alt}>
                  <img src={ig.publicURL} alt={l.alt} className="mr-2 w-10 h-10" />
                  <div className="flex-1 ml-[-20px]">
                    <a href="#" className="text-lg  font-bold flex items-center justify-center rounded-full px-4 py-2">
                      <span>*NEW* Books & Journals</span>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </>
      )
    }
    }
  />
)


export default Linktree;




