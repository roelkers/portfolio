import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeaderImage from "../components/headerImage"
import SEO from "../components/seo"
import ProfileImage from '../components/profileImage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <HeaderImage className='header__image'/>
    </header>
    <main className='main'>
      <section className='section-personal'>
        <div className="personal">
          <h2>My skills:</h2>
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
            <a className='projects__github' href='#'><i className='devicon-github-original colored' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a className='projects__github' href='#'><i className='devicon-github-original colored' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a className='projects__github' href='#'><i className='devicon-github-original colored' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
          <div className='projects__card'>
            <img className='projects__img' />
            <h3 className="projects__title">CQRS shopping list&nbsp;&nbsp;
            <a className='projects__github' href='#'><i className='devicon-github-original colored' /></a>&nbsp;&nbsp;
            <a href='#' className='projects__live'>live!</a></h3>
            <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi harum soluta velit, laboriosam quod fugit.</p>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className='about'>
          <div className='about__photo'>
            <ProfileImage className='about__img' />
          </div> 
          <div className="about__description">
            <h3>About Me</h3>
            <p className='about__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed iste hic similique. Obcaecati ipsum, consequuntur cum, consequatur at perspiciatis dolorum, error molestias ratione sequi nostrum sunt odio ea recusandae?</p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
