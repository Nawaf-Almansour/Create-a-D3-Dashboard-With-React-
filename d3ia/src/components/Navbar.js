import { useState, useCallback } from "react";
import { Home, HelpCircle } from "react-feather";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useLockBodyScroll, usePageLeave, useWindowSize } from "react-use";

function Navbar({ pages, showLanguageSwitcher, setShowLanguageSwitcher }) {
  const [expand, setExpand] = useState(false);

  useLockBodyScroll(expand);
  const windowSize = useWindowSize();

  usePageLeave(() => setExpand(false));

  const navbarTransition = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  const handleMouseEnter = useCallback(() => {
    if (windowSize.width >= 769) {
      setExpand(true);
    }
  }, [windowSize.width]);

  const handleLanguageSwitcher = useCallback(() => {
    if (expand) setExpand(false);
    setShowLanguageSwitcher(!showLanguageSwitcher);
  }, [expand, showLanguageSwitcher, setExpand, setShowLanguageSwitcher]);

  return navbarTransition((style, item) => (
    <animated.div className="Navbar" {...{ style }}>
      <div className="navbar-left" onClick={handleLanguageSwitcher}></div>

      <div className="navbar-middle">
        <Link to="/" onClick={setExpand.bind(this, false)}>
          Covid19<span>saudia</span>
        </Link>
      </div>

      <div
        className="navbar-right"
        onMouseEnter={handleMouseEnter}
        {...(windowSize.width < 769 && {
          onClick: setExpand.bind(this, !expand),
        })}
      >
        {windowSize.width < 769 && (
          <span>{expand ? t("Close") : t("Menu")}</span>
        )}

        {windowSize.width >= 769 && (
          <>
            <Link to="/">
              <span>
                <Home {...activeNavIcon("/")} />
              </span>
            </Link>
            <Link to="/about">
              <span>
                <HelpCircle {...activeNavIcon("/about")} />
              </span>
            </Link>
          </>
        )}
      </div>
    </animated.div>
  ));
}
export default Navbar;

const activeNavIcon = (path) => ({
  style: {
    stroke: window.location.pathname === path ? "#4c75f2" : "",
  },
});
