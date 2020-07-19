import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from 'react-markdown'
import Image from 'gatsby-image'
import { Navigation } from "../components/nav"

const Post = ({ data }: any) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <section className='section-navigation'>
        <h2>Content</h2>
        <Navigation />
      </section>
      <main className='post'>
        <section className="post__section-title">
          <span className='post__category'>{data.strapiBlog.category}</span>
          <h1 className="post__title">{data.strapiBlog.text}</h1>
          <span className='post__date'>{data.strapiBlog.date}</span>
        </section>
        <section className='post__author'><Link className='post__author-link' to='/#personal'>Rufus Oelkers</Link></section>
        <Image fluid={data.strapiBlog.image.childImageSharp.fluid}  className='post__image'/>
        <section className="post__content">
          <ReactMarkdown source={data.strapiBlog.content} />
        </section>
      </main>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    strapiBlog(slug: {eq: $slug}) {
      text
      content
      image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      slug
      date
      category
    }
  }`