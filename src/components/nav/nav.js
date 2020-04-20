import React from "react"
import { Link } from "gatsby"

import styles from './index.module.scss'

function Nav(props) {
  const { previous, next } = props;
  return (<nav>
    <ul
      className={styles.nav}
    >
      <li className={styles.navItem}>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li className={styles.navItem}>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
        </Link>
        )}
      </li>
    </ul>
  </nav>);
}

export default Nav;
