import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const AboutPage = () => (
  <Layout>
    <h1>About the Author</h1>
    <p>Welcome to my Gatsby site.</p>
    <Link to='/page-2'>Page 2</Link>
  </Layout>
)
export default AboutPage