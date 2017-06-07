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

function trackPageView() {
  var appInsights = window.appInsights || function (config) {
    //eslint-disable-next-line no-empty
    function i(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = "AuthenticatedUserContext", h = "start", c = "stop", l = "Track", a = l + "Event", v = l + "Page", y = u.createElement(o), r, f; y.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(y); try { t.cookie = u.cookie } catch (p) { } for (t.queue = [], t.version = "1.0", r = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; r.length;)i("track" + r.pop()); return i("set" + s), i("clear" + s), i(h + a), i(c + a), i(h + v), i(c + v), i("flush"), config.disableExceptionTracking || (r = "onerror", i("_" + r), f = e[r], e[r] = function (config, i, u, e, o) { var s = f && f(config, i, u, e, o); return s !== !0 && t["_" + r](config, i, u, e, o), s }), t
  }({
    instrumentationKey: "a41dc67d-f00f-46ab-942a-59fbc9a7c301"
  });

  window.appInsights = appInsights;
  appInsights.trackPageView();
}

function userRedirect(nextState, replace) {
  if (typeof window == "undefined") return;

  trackPageView();

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
