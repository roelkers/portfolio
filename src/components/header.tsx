import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Header = () => {
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
    <Link
      to="/"
    >
      <BackgroundImage
        Tag={`section`}
        id={`test`}
        className='header-layout__img'
        fluid={backgroundFluidImageStack}
      />
    <section className="header-layout__title">
      <h2>Blog</h2>
    </section>
    </Link>
  )
}

export default Header
