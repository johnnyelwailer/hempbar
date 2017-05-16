import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PanelList from "./panelList"

// import styles from "./index.css"

const defaultNumberOfPanels = 2

const panels = (props, { collection }) => {
  const panels = enhanceCollection(collection, {
    filter: { layout: "Panel" },
    sort: "sort",
  })
  .slice(0, props.numberOfPanels || defaultNumberOfPanels)

  return (
    <div>
      <PanelList pages={ panels } />
    </div>
  )
}

panels.propTypes = {
  numberOfPanels: PropTypes.number,
}

panels.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default panels
