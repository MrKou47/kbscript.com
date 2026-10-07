/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 50, height: 50)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          border: '1px solid #f4f4f4',
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <span>Personal blog by <strong>{author.name}</strong> {author.summary}</span>
        <div>
          You could follow him on
          <a style={{ marginLeft: 10 }} href={social.github}>Github</a>
          <a style={{ marginLeft: 10 }} href={social.twitter}>Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default Bio
