import React, { PropTypes } from "react"

import Panels from "../../components/Panels"
import Page from "../Page"

const Homepage = (props) => {
  const lang = (props.head.__url || props.__url || "").split('/').filter(p => p != "")[0];

  return (
    <Page { ...props }>
      <Panels lang={lang} />
    </Page>
  )
}

Homepage.propTypes = {
  head: PropTypes.any,
  __url: PropTypes.string,
}


export default Homepage
