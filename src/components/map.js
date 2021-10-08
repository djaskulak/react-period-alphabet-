import './map.css';
import { useSelector } from 'react-redux';

import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function ClinicList({ features }) {
    for (const { properties } of features) {
        /* Add a new listing section to the sidebar. */
        const listings = document.getElementById('listings');
        const listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = `listing-${properties.id}`;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';
    
        /* Add the link to the individual listing created above. */
        const link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${properties.id}`;
        link.innerHTML = `${properties.address}`;
    
        /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${properties.city}`;
        if (properties.name) {
            details.innerHTML += ` · ${properties.name}`
        }
        if (properties.phone) {
            details.innerHTML += ` · ${properties.phoneFormatted}`;
        }
        if (properties.distance) {
            const roundedDistance = Math.round(properties.distance * 100) / 100;
            details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
        }
    }
}

function Map () {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const data = useSelector((state) => state.connectData);
    const {
        clinics
    } = data


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-122.431297, 37.773972],
            zoom: 13
        });
        clinics.features.forEach(function (clinic, i) {
            clinic.properties.id = i;
        });
        map.current.on('load', () => {
            /* Add the data to your map as a layer */
            map.current.addLayer({
              id: 'locations',
              type: 'circle',
              /* Add a GeoJSON source containing place coordinates and information. */
              source: {
                type: 'geojson',
                data: clinics
              }
            });
        });
        ClinicList(clinics)
    });

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map