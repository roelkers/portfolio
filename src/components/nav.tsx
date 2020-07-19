import React from 'react'
import { Link } from 'gatsby'

export const Navigation = ({ }) => {

  return <nav className='navigation'>
    <ul className='navigation__list'>
      <li className="navigation__item"><Link className='navigation__link' to='/#personal'>Personal</Link></li>
      <li className="navigation__item"><Link className='navigation__link' to='/#about'>About</Link></li>
      <li className="navigation__item"><Link className='navigation__link' to='/#projects'>Projects</Link></li>
      <li className="navigation__item"><Link className='navigation__link' to='/#blog'>Blog</Link></li>
    </ul>
  </nav>
}