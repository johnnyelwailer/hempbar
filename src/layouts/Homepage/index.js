import React from "react"

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

export default Homepage
