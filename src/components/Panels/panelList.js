import React, { PropTypes } from "react"
import Panel from "./Panel"


import styles from "./index.css"

const PagesList = ({ pages }) => {
    console.log(pages)
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.listHorizontal }>
          {
          pages.map((page) => (
            <li key={ page.title }><Panel page={page}/></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList