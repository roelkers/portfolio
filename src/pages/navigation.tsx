import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Navigation } from "../components/nav"

const NavigationPage = () => {
  return (
    <>
      <SEO title="Navigation" />
      <main className='nav-page'>
        <h2>Content</h2>
        <Navigation />
      </main>
    </>
  )
}

export default NavigationPage