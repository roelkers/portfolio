import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

const Blogs = () => {
  const query = useStaticQuery(graphql`  
  query {
    allStrapiBlog {
      edges {
        node {
          slug 
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          text
          content
          category
        }
      }
    }
  }
`)
  const blogEntries = query.allStrapiBlog.edges
  return (
    <div className='blogs'>
      <h2>Blog</h2> 
      {blogEntries.map((entry : any) => {
      const { slug, image, content, text } = entry.node
      return (<article className='blogs__article'>
        <Link className='blogs__img-link' to={`/${slug}`}><Image fixed={image.childImageSharp.fixed} className='blogs__img'/></Link>
        <div className='blogs__description'>
          <h3 className="blogs__title">{text}</h3> 
          <p className='blogs__preview'>{content}</p>
          <span className='blogs__more'>
              <Link className='blogs__link' to={`/${slug}`}>Read more...</Link>
           </span>
        </div>
      </article>)})}
    </div>
  )
}

export default Blogs

