import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import splitbee from '@splitbee/web';

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
const paragraphStyles = {
  marginBottom: 48,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Hell Yes Cat</title>
      <StaticImage alt="Hell Yes Cas Logotype" src="../images/logotype.svg"/>
      <h1 style={headingStyles}>
        Hell Yes Cat is coming ...slow 
        <span role="img" aria-label="猴子遮臉">🙈</span>
      </h1>
      <p>不過，關於黑貓的傳說都是真的！</p>
    </main>
  )
}

export default IndexPage
