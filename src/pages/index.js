import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Container } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Container maxWidth="xl">
    <Grid container>
      <Grid item md={6}>
        <Seo title="Ali Muhammad" />
        <Typography variant="h2" component="h2" style={{marginBottom: '10px'}}>Hey there! I'm Ali</Typography>
        <Typography variant="p" component="h3" style={{marginBottom: '20px'}}>A self taught software developer and open source contributor from pakistan.</Typography>
        <StaticImage
          src="../images/programming.svg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ali Muhammad"
          style={{ marginBottom: `1.45rem` }}
        />
        {/* <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p> */}
      </Grid>
      <Grid item md={6}>
        <div className="terminal">
          <div className="terminal-header">

          </div>
          <div className="terminal-body">
            <Typography variant="p" component="h4" style={{marginTop: '6px'}}>root@ali:~$<span className="cursor"> _</span></Typography>
          </div>
        </div>
      </Grid>
    </Grid>
    </Container>
  </Layout>
)

export default IndexPage
