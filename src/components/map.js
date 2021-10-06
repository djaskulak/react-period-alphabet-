import './map.css';

import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map () {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-122.431297, 37.773972],
            zoom: 13,
            scrollZoom: false
        });
    });

    

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map