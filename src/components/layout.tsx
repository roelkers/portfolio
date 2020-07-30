/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import 'typeface-source-sans-pro'

const Layout = ({ children }: any) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}


export default Layout
