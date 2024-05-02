import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'


// type ItemNode = { readonly excerpt: string | null, readonly id: string, readonly frontmatter: { readonly date: string | null, readonly title: string | null } | null, readonly parent: { readonly modifiedTime: string } | {} | null }
// type PortfolioItemsQuery = { readonly allMdx: { readonly nodes: ReadonlyArray<ItemNode> } };
const PortfolioItems = () => (
  <StaticQuery
    query={graphql`
      query PortfolioItems {
        allMdx(sort: {frontmatter: {date: DESC}}) {
          nodes {
            excerpt
            id
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
            parent {
              ... on File {
                modifiedTime
              }
            }
          }
        }
      }
    `}
    render={(data: Queries.PortfolioItemsQuery)  => {
      console.log("allMdx", JSON.stringify(data.allMdx))
      return (
        <div className="grid grid-cols-3 gap-4">
          {
            data.allMdx?.nodes?.map((node) => (
              <div className="relative group overflow-hidden rounded cursor-pointer" key={node.id} title={node.frontmatter?.title as string}>
                <img src="https://placehold.co/150x100" alt="Portfolio Item" className="w-full" />
                <div className="absolute bottom-0 w-full py-1 text-xs text-center font-bold text-[#000] dark:text-white group-hover:text-white dark:group-hover:text-[#000] bg-[#bbbbff] opacity-70 group-hover:bg-[#9999ff] group-hover:opacity-100 dark:bg-[#9999ff] dark:group-hover:bg-[#bbbbff] dark:opacity-100 dark:group-hover:opacity-70 transition duration-500">
                  {node.frontmatter?.title}
                </div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#9999ff] dark:group-hover:border-[#bbbbff] transition duration-500"></div>
              </div>
            ))
          }
        </div>
      )
    }
    }
  />
)


export default PortfolioItems



