import "./App.scss";
import { retry } from "./utils/commonFunctions";

import { lazy, useState, Suspense, useEffect } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => retry(() => import("./components/Home")));
const About = lazy(() => retry(() => import("./components/About")));

const App = () => {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const location = useLocation();

  const pages = [
    {
      pageLink: "/",
      view: Home,
      displayName: "Home",
      showInNavbar: true,
    },
    {
      pageLink: "/about",
      view: About,
      displayName: "About",
      showInNavbar: true,
    },
  ];

  useEffect(() => {
    if (showLanguageSwitcher) {
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      // For Safari
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showLanguageSwitcher]);

  return (
    <div className="App">
      <Suspense fallback={<div />}></Suspense>
      <Navbar {...{ pages, showLanguageSwitcher, setShowLanguageSwitcher }} />

      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({ match }) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
