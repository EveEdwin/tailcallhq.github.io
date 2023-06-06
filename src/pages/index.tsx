import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import Layout from "@theme/Layout"
import clsx from "clsx"
import React, {useEffect, useState} from "react"

import styles from "./index.module.css"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <span>GraphQL for fearless scaling, </span>
          <span style={{color: "white", textShadow: "rgb(0 0 0 / 92%) 0px 2px 4px"}}>unleashed!</span>
        </h1>
        <p className="hero__subtitle">
          Tailcall's <b>developer platform</b> dramatically simplifies
          infrastructural complexity and streamlines collaboration between
          teams.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://docs.google.com/forms/d/e/1FAIpQLSdNnaVhv1lR-EN6I9HAH6eIycN_0T-1URIch9IdXo0yZm9t3Q/viewform"
          >
            Join the waitlist!
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext()

  const [dimensions, setDimensions] = useState({height: -1, width: -1})
  useEffect(() => {
    const width = Math.min(800, screen.width)
    const height = (width / 16) * 9

    setDimensions({width, height})
  })

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Simplify your edge layer with Tailcall's developer platform."
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
