import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
}

const layoutStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ pageTitle, children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <header>
          <h1>{pageTitle || data.site.siteMetadata?.title}</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
          </nav>
        </header>
        <main style={layoutStyles}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

