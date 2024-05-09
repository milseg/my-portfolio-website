import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// type ItemNode = { readonly excerpt: string | null, readonly id: string, readonly frontmatter: { readonly date: string | null, readonly title: string | null } | null, readonly parent: { readonly modifiedTime: string } | {} | null }
// type PortfolioItemsQuery = { readonly allMdx: { readonly nodes: ReadonlyArray<ItemNode> } };
const PortfolioItems = () => (
  <StaticQuery
    query={graphql`
      query PortfolioItems {
        allMdx(sort: {frontmatter: {order: ASC}}) {
          nodes {
            excerpt
            id
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              order
              cover
              guru
            }
            parent {
              ... on File {
                modifiedTime
              }
            }
          }
        }
        allFile(filter: {relativePath: {regex: "/portfolio.*/"}, sourceInstanceName: {eq: "images"}}) {
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
    render={(data: Queries.PortfolioItemsQuery)  => {
      type igMapType = {[key: string]: string }
      let igMap:  igMapType = {}
      data.allFile.edges.forEach(({node}) => {
        igMap[node.relativePath.replace(/^.*\//, '')] = node.publicURL as string
      })

      return (
        <div className="grid grid-cols-3 gap-4">
          {
            data.allMdx?.nodes?.map((node) => (
              <a href={node.frontmatter?.guru as string} className="relative group overflow-hidden rounded cursor-pointer" key={node.id} title={node.frontmatter?.title as string} target="_blank" rel="noopener noreferrer">
                <img src={igMap[node.frontmatter?.cover as string]} alt="Portfolio Item" className="w-[150px] h-[100px]" />
                <div className="absolute bottom-0 w-full py-1 text-xs text-center font-bold text-red-800 dark:text-white group-hover:text-white dark:group-hover:text-[#000] bg-[#bbbbff] opacity-70 group-hover:bg-[#9999ff] group-hover:opacity-100 dark:bg-[#9999ff] dark:group-hover:bg-[#bbbbff] dark:opacity-100 dark:group-hover:opacity-70 transition duration-500 h-11">
                  <div className="flex flex-col justify-center items-center h-full pb-1">
                  {node.frontmatter?.title}
                  </div>
                </div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#9999ff] dark:group-hover:border-[#bbbbff] transition duration-500"></div>
              </a>
            ))
          }
        </div>
      )
    }
    }
  />
)


export default PortfolioItems



