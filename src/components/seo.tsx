import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

type SeoProps = {
  pageTitle?: string;
}

const Seo = ({ pageTitle }: SeoProps) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <title> {pageTitle} | {data.site.siteMetadata?.title} </title>
    )}
  />
)


export default Seo


