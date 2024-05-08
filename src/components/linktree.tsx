import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { linkTreeData, igMapNode } from '../../data/linktree'

const Linktree = () => (
  <StaticQuery
    query={graphql`
      query Linktree {
        allFile(filter: {relativePath: {regex: "/linktree.*/"}, sourceInstanceName: {eq: "images"}}) {
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
    render={(data: Queries.LinktreeQuery)  => {

      type igMapType = {[key: string]: igMapNode }
      let igMap:  igMapType = {}
      data.allFile.edges.forEach(({node}) => {
        igMap[node.relativePath.replace(/^.*\//, '').replace(/\..*$/, '')] = node
      })
      let lts = linkTreeData.map((el) => {
        el.image = igMap[el.imgKey]
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
                    <a href={l.href} className="text-lg font-bold flex items-center justify-center rounded-full px-4 py-2" target="_blank" rel="noopener noreferrer">
                      <span>{l.title}</span>
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




