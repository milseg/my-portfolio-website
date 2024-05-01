import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

type LayoutProps = {
  pageTitle?: string;
}

const Seo = ({ pageTitle }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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


