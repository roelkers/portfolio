import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Image from 'gatsby-image'

const SingleImage = ({ className } : { className : string}) => {
  const image = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Image
      Tag={`section`}
      className={className}
      fixed={image.file.childImageSharp.fixed}
    />
  )
}

export default SingleImage ;