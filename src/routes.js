import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import Panel from "./layouts/Panel"
// const Panel = (props) => <Page {...props} />
const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      Panel
    }}
  />
)

function userRedirect(nextState, replace) {
  if (typeof window == "undefined") return;
  const availableLanguages = ["de", "fr"];
  const path = nextState.location.pathname.split('/').filter(p => p != "");
  const lang = path[0];
  if (availableLanguages.includes(lang)) {
    return; 
  }
  var userLang = navigator.language.split('-')[0];
  var defaultLanguage =  availableLanguages.includes(userLang) ? userLang : 'de';
  var redirectPath = defaultLanguage + nextState.location.pathname
  replace({
    pathname: redirectPath
  });
}

export default (
  <Route component={ AppContainer }>
    {/*<Route path=":lang">

      <Route path="/" component={ PageContainer } />
    </Route>*/}
    <Route path="*" onEnter={userRedirect}  component={ PageContainer }  />
  </Route>
)
