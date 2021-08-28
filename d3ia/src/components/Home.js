
import {
    API_REFRESH_INTERVAL,
    DATA_API_ROOT,
} from "../constants";
import useIsVisible from "../hooks/useIsVisible";
import useStickySWR from "../hooks/useStickySWR";
import {
    fetcher,
} from "../utils/commonFunctions";

import classnames from "classnames";
import { useRef, useState, Suspense} from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useLocalStorage, useWindowSize } from "react-use";

function Home() {

    const [anchor] = useLocalStorage('anchor', null);
    const [expandTable] = useLocalStorage('expandTable', false);


    const [date] = useState('');
    const location = useLocation();

    const {data: timeseries} = useStickySWR(
        `${DATA_API_ROOT}/timeseries.min.json`,
        fetcher,
        {
            revalidateOnMount: true,
            refreshInterval: API_REFRESH_INTERVAL,
        }
    );

    const {data} = useStickySWR(
        `${DATA_API_ROOT}/data${date ? `-${date}` : ''}.min.json`,
        fetcher,
        {
            revalidateOnMount: true,
            refreshInterval: API_REFRESH_INTERVAL,
        }
    );

    const homeRightElement = useRef();
    const isVisible = useIsVisible(homeRightElement);
    const {width} = useWindowSize();

    return (
        <>
            <Helmet>
                <title>Coronavirus Outbreak in India - covid19india.org</title>
                <meta
                    name="title"
                    content="Coronavirus Outbreak in India: Latest Map and Case Count"
                />
            </Helmet>

            <div className="Home">
                <div className={classnames('home-left', {expanded: expandTable})}>
                    <div className="header">
                        <Suspense fallback={<div />}>
                        </Suspense>

                        {!data && !timeseries && <div style={{height: '60rem'}} />}

                        <>
                            {!timeseries && <div style={{minHeight: '61px'}} />}
                            {timeseries && (
                                <Suspense fallback={<div style={{minHeight: '61px'}} />}>

                                </Suspense>
                            )}
                        </>
                    </div>

                    <div style={{position: 'relative', marginTop: '1rem'}}>
                        {data && (
                            <Suspense fallback={<div style={{height: '50rem'}} />}>}
                            </Suspense>
                        )}

                        <>
                            {!timeseries && <div style={{height: '123px'}} />}
                            {timeseries && (
                                <Suspense fallback={<div style={{height: '123px'}} />}>

                                </Suspense>
                            )}
                        </>
          </div>
                </div>

                <div
                    className={classnames('home-right', {expanded: expandTable})}
                    ref={homeRightElement}
                    style={{minHeight: '4rem'}}
                >
                    {(isVisible || location.hash) && (
                        <>
                            {data && (
                                <div
                                    className={classnames('map-container', {
                                        expanded: expandTable,
                                        stickied:
                                            anchor === 'mapexplorer' || (expandTable && width >= 769),
                                    })}
                                >
                                    <Suspense fallback={<div style={{height: '50rem'}} />}>

                                    </Suspense>
                                </div>
                            )}

                            {timeseries && (
                                <Suspense fallback={<div style={{height: '50rem'}} />}>
                                </Suspense>
                            )}
                        </>
                    )}
                </div>
            </div>

            {isVisible && (
                <Suspense fallback={<div />}>
                </Suspense>
            )}
        </>
    );
}

export default Home;
