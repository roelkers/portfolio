import React from 'react'

export default () => (
  <footer className='footer'>
    <p className='footer__date'>
      © {new Date().getFullYear()}, Built with{` `}
    <a className='footer__link-gatsby' href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </footer>
)