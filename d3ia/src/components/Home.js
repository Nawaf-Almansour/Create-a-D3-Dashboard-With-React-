import {
  API_REFRESH_INTERVAL,
  DATA_API_ROOT,
  DISTRICT_START_DATE,
  DISTRICT_TEST_END_DATE,
  MAP_VIEWS,
  TESTED_EXPIRING_DAYS,
  UNKNOWN_DISTRICT_KEY,
} from "../constants";
import useIsVisible from "../hooks/useIsVisible";
import useStickySWR from "../hooks/useStickySWR";
import {
  getStatistic,
  fetcher,
  retry,
  parseSaudiaDate, formatDateObjSaudia,
} from "../utils/commonFunctions";

import classnames from "classnames";
import { addDays, formatISO, max } from "date-fns";
import { useMemo, useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useLocalStorage, useSessionStorage, useWindowSize } from "react-use";

const Actions = lazy(() => retry(() => import("./Actions")));
const MapSwitcher = lazy(() => retry(() => import("./MapSwitcher")));
const Level = lazy(() => retry(() => import("./Level")));
const Minigraphs = lazy(() => retry(() => import("./Minigraphs")));
const StateHeader = lazy(() => retry(() => import("./StateHeader")));
const MapExplorer = lazy(() => retry(() => import("./MapExplorer")));

function Home() {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: "TT",
    districtName: null,
  });
  const [anchor, setAnchor] = useLocalStorage("anchor", null);
  const [expandTable] = useLocalStorage("expandTable", false);

  const [mapStatistic, setMapStatistic] = useSessionStorage(
    "mapStatistic",
    "active"
  );

  const [date, setDate] = useState("");
  const location = useLocation();

  const [mapView, setMapView] = useLocalStorage("mapView", MAP_VIEWS.DISTRICTS);

  const hideDistrictData = date !== "" && date < DISTRICT_START_DATE;
  const hideDistrictTestData =
    date === "" ||
    date >
      formatISO(
        addDays(parseSaudiaDate(DISTRICT_TEST_END_DATE), TESTED_EXPIRING_DAYS),
        { representation: "date" }
      );


  const { data: timeseries } = useStickySWR(
    `${DATA_API_ROOT}/timeseries.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: API_REFRESH_INTERVAL,
    }
  );

  const { data } = useStickySWR(
    `${DATA_API_ROOT}/data${date ? `-${date}` : ""}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: API_REFRESH_INTERVAL,
    }
  );

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const { width } = useWindowSize();

  const hideVaccinated =
    getStatistic(data?.["TT"], "total", "vaccinated") === 0;

  const lastDataDate = useMemo(() => {
    const updatedDates = [
      data?.["TT"]?.meta?.date,
      data?.["TT"]?.meta?.tested?.date,
      data?.["TT"]?.meta?.vaccinated?.date,
    ].filter((date) => date);
    return updatedDates.length > 0
      ? formatISO(max(updatedDates.map((date) => parseSaudiaDate(date))), {
          representation: "date",
        })
      : null;
  }, [data]);

  const lastUpdatedDate = useMemo(() => {
    const updatedDates = Object.keys(data || {})
      .map((stateCode) => data?.[stateCode]?.meta?.["last_updated"])
      .filter((datetime) => datetime);
    return updatedDates.length > 0
      ? formatDateObjSaudia(
          max(updatedDates.map((datetime) => parseSaudiaDate(datetime)))
        )
      : null;
  }, [data]);

  const noRegionHighlightedDistrictData =
    regionHighlighted?.stateCode &&
    regionHighlighted?.districtName &&
    regionHighlighted.districtName !== UNKNOWN_DISTRICT_KEY &&
    noDistrictDataStates[regionHighlighted.stateCode];

  return (
    <>
      <Helmet>
        <title>Coronavirus Outbreak in Saudia - Saudi.org</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in Saudia: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Home">
        <div className={classnames("home-left", { expanded: expandTable })}>
          <div className="header">
            <Suspense fallback={<div />}></Suspense>

            {!data && !timeseries && <div style={{ height: "60rem" }} />}

            <>
              {!timeseries && <div style={{ minHeight: "61px" }} />}
              {timeseries && (
                <Suspense fallback={<div style={{ minHeight: "61px" }} />}>
                  <Actions
                    {...{
                      date,
                      setDate,
                      dates: Object.keys(timeseries["TT"]?.dates),
                      lastUpdatedDate,
                    }}
                  />
                </Suspense>
              )}
            </>
          </div>

          <div style={{ position: "relative", marginTop: "1rem" }}>
            {data && (
              <Suspense fallback={<div style={{ height: "50rem" }} />}>
                {width >= 769 && !expandTable && (
                  <MapSwitcher {...{ mapStatistic, setMapStatistic }} />
                )}
                <Level data={data["TT"]} />
              </Suspense>
            )}

            <>
              {!timeseries && <div style={{ height: "123px" }} />}
              {timeseries && (
                <Suspense fallback={<div style={{ height: "123px" }} />}>
                  <Minigraphs
                    timeseries={timeseries["TT"]?.dates}
                    {...{ date }}
                  />
                </Suspense>
              )}
            </>
          </div>
        </div>

        <div
          className={classnames("home-right", { expanded: expandTable })}
          ref={homeRightElement}
          style={{ minHeight: "4rem" }}
        >
          {(isVisible || location.hash) && (
            <>
              {data && (
                <div
                  className={classnames("map-container", {
                    expanded: expandTable,
                    stickied:
                      anchor === "mapexplorer" || (expandTable && width >= 769),
                  })}
                >
                  <Suspense fallback={<div style={{ height: "50rem" }} />}>
                    <StateHeader data={data["TT"]} stateCode={"TT"} />
                    <MapExplorer
                      {...{
                        stateCode: "TT",
                        data,
                        mapStatistic,
                        setMapStatistic,
                        mapView,
                        setMapView,
                        regionHighlighted,
                        setRegionHighlighted,
                        anchor,
                        setAnchor,
                        expandTable,
                        lastDataDate,
                        hideDistrictData,
                        hideDistrictTestData,
                        hideVaccinated,
                        noRegionHighlightedDistrictData,
                      }}
                    />
                  </Suspense>
                </div>
              )}

              {timeseries && (
                <Suspense
                  fallback={<div style={{ height: "50rem" }} />}
                ></Suspense>
              )}
            </>
          )}
        </div>
      </div>

      {isVisible && <Suspense fallback={<div />}></Suspense>}
    </>
  );
}

export default Home;
