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
          <>
          {
            data.allMdx?.nodes?.map((node) => (
              <article key={node.id}>
                <h2>{node.frontmatter?.title}</h2>
                <p>Posted: {node.frontmatter?.date}</p>
              </article>
            ))
          }
          </>
        )
      }
    }
  />
)


export default PortfolioItems



