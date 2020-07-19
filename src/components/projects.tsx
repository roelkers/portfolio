import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const Projects = () => {
  const data = useStaticQuery(graphql`
      query Projects {
        allStrapiProject {
          edges {
            node {
              title
              github_link
              description
              live_link
            }
          }
        }
    }`
  )
  return (
    <>
      <h2 className='projects__title'>My projects:</h2>
      <div className='projects'>
        {data.allStrapiProject.edges.map((edge: any) => {
          const { node } = edge
          return (
            <div className='projects__card' key={node.title}>
              <img className='projects__img' />
              <h3 className="projects__title">{node.title}&nbsp;&nbsp;
            <a className='projects__github' href={node.github_link}><i className='devicon-github-original colored' /></a>&nbsp;&nbsp;
          {node.live_link && <a href={node.live_link} className='projects__live'>live!</a>}</h3>
              <p className="projects__description">{node.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
