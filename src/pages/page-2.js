import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>The Website is under development please visit againg!</h1>
    <Link to="/">Go back</Link>
  </Layout>
)

export default SecondPage
