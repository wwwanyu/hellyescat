import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import splitbee from '@splitbee/web'
import { Helmet } from "react-helmet"

splitbee.init()

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  color: '#322C25',
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hell Yes Cat</title>
        <link rel="canonical" href="https://hellyes.cat" />
      </Helmet>
      <StaticImage alt="Hell Yes Cas Logotype" src="../images/logotype.svg" />
      <h1 style={headingStyles}>
        coming ...slow
        <span role="img" aria-label="猴子遮臉">🙈</span>
      </h1>
      <p>不過，關於黑貓的傳說都是真的！</p>
    </main>
  )
}

export default IndexPage
