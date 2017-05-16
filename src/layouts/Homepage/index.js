import React from "react"

import Panels from "../../components/Panels"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <Panels />
    </Page>
  )
}

export default Homepage
