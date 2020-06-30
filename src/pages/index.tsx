import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeaderImage from "../components/headerImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <HeaderImage className='header__image'/>
    </header>
    <main className='main'>
      <section className='section-personal'>
        <div className="personal">
          <h2>My Skills:</h2>
          <ul className='personal__list'>
            <li className="personal__item"><span className='devicon'>🏯</span> Software Architecture</li>
            <li className="personal__item"><i className='devicon-react-original colored personal__devicon'/>React.js</li>
            <li className="personal__item"><i className='devicon-postgresql-plain colored personal__devicon'/>Postgresql</li>
            <li className="personal__item"><i className='devicon-typescript-plain colored personal__devicon'/>Typescript</li>
            <li className="personal__item"><i className='devicon-sass-original colored personal__devicon'/>Sass</li> 
            <li className="personal__item"><i className='devicon-docker-plain colored personal__devicon'/>Docker</li> 
            <li className="personal__item"><i className='devicon-mongodb-plain colored personal__devicon'/>MongoDB</li> 
            <li className="personal__item"><i className='devicon-nodejs-plain colored personal__devicon'/>node.js</li> 
          </ul>
        </div>
    </section>
    <section className='section-projects'>
        <h2 className='section-heading'>My projects:</h2>
        <div className='projects'>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a href='#'><i className='devicon-github-original colored project__github' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a href='#'><i className='devicon-github-original colored project__github' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a href='#'><i className='devicon-github-original colored project__github' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a href='#'><i className='devicon-github-original colored project__github' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
