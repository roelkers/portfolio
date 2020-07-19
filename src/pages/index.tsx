import React from "react"
import { Link } from "gatsby"
import HeaderImage from "../components/headerImage"
import Footer from '../components/footer'
import SEO from "../components/seo"
import ProfileImage from '../components/profileImage'
import Blogs from "../components/blogs"
import { Projects } from "../components/projects"
import { Navigation } from "../components/nav"

const IndexPage = () => (
  <div>
    <div className='nav-menu'><Link to='/navigation' className='nav-menu__link'><span className='nav-menu__icon'></span></Link></div>
    <SEO title="Home" />
    <header className="header">
      <HeaderImage className='header__image' />
    </header>
    <main className='main'>
      <section id='personal' className='section-personal'>
        <div className="personal">
          <h2>Skills:</h2>
          <ul className='personal__list'>
            <li className="personal__item"><span className='personal__devicon'>🏯</span> Software Architecture</li>
            <li className="personal__item"><i className='devicon-react-original colored personal__devicon' />React.js</li>
            <li className="personal__item"><i className='devicon-postgresql-plain colored personal__devicon' />Postgresql</li>
            <li className="personal__item"><i className='devicon-typescript-plain colored personal__devicon' />Typescript</li>
            <li className="personal__item"><i className='devicon-sass-original colored personal__devicon' />Sass</li>
            <li className="personal__item"><i className='devicon-docker-plain colored personal__devicon' />Docker</li>
            <li className="personal__item"><i className='devicon-mongodb-plain colored personal__devicon' />MongoDB</li>
            <li className="personal__item"><i className='devicon-nodejs-plain colored personal__devicon' />node.js</li>
          </ul>
        </div>
      </section>
      <section className='section-navigation'>
        <h2>Content</h2>
        <Navigation />
      </section>
      <section id='about' className="section-about">
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
      <section id='projects' className='section-projects'>
        <Projects />
      </section>
      <section id='blog' className="section-blogs"><Blogs /></section>
    </main>
    <Footer />
  </div>
)

export default IndexPage
