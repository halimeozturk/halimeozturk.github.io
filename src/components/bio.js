/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
         <div>
         <p>
           Written by <strong>{author.name}</strong> {author?.summary || null}
         </p>
         <p>
           {` You should follow them on `}
           <a href={`https://twitter.com/${social?.twitter || ``}`}
              target={"_blank"}
           >
             Twitter
           </a>
           {` `}
           <a href={`https://github.com/${social?.github || ``}`}
              target={"_blank"}
           >
               Github
           </a>
           {` `}
           <a href={`https://linkedin.com/${social?.linkedin || ``}`}
              target={"_blank"}
           >
               Linkedin
           </a>
         </p>
         </div>
      )}
    </div>
  )
}

export default Bio
