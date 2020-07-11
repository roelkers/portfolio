
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import BackgroundImage from 'gatsby-background-image'

const MultiBackground = ({ className } : { className : string}) => {
  const {
    header,
  } = useStaticQuery(
    graphql`
      query {
        header: file(relativePath: { eq: "header-large.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    header.childImageSharp.fluid,
    `linear-gradient(rgba(60, 91, 214, 0.73), rgba(115, 140, 240, 0.73))`,
  ].reverse()
  
  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <h1 className="header__heading header__heading--slide-1">
        Hey, great to have you here.
        </h1>
      <h1 className="header__heading header__heading--slide-2">
        My Name is Rufus Oelkers.
        </h1>
      <h1 className="header__heading header__heading--slide-3">
        I am a Software engineer. 
      </h1>
    </BackgroundImage>
  )
}

export default MultiBackground;