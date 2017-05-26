import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PanelList from "./panelList"

const panels = (props, { collection }) => {
  const panels = enhanceCollection(collection, {
    filters: [{ layout: "Panel" }, (item) => item.__url.split("/").filter(p => p != "")[0] == props.lang],
    sort: "title",
  })

  return (
    <div>
      <PanelList pages={ panels } />
    </div>
  )
}

panels.propTypes = {
  numberOfPanels: PropTypes.number,
  lang: PropTypes.string,
}

panels.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default panels
