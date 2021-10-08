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
        link.innerHTML = `${properties.name}`;
    
        /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${properties.address}`;
        if (properties.phone) {
            details.innerHTML += ` · ${properties.phoneFormatted}`;
        }
        if (properties.distance) {
            const roundedDistance = Math.round(properties.distance * 100) / 100;
            details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
        }

        link.addEventListener('click', function () {
            for (const feature of features) {
              if (this.id === `link-${feature.properties.id}`) {
                flyToClinic(feature);
                createPopUp(feature);
              }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    }
}

function flyToClinic(currentFeature) {
    Map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
}
  
function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();
  
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h4>${currentFeature.properties.name}</h4>`)
      .addTo(Map);
}

function Map () {
    const mapContainer = useRef(null);
    const map = useRef(null);
    /* connecting the json with clinic data using redux */
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
        map.current.on('click', ({ point }) => {
            /* Determine if a feature in the "locations" layer exists at that point. */
            const features = map.queryRenderedFeatures(point, {
              layers: ['locations']
            });
          
            /* If it does not exist, return */
            if (!features.length) return;
          
            const clickedPoint = features[0];
          
            /* Fly to the point */
            flyToClinic(clickedPoint);
          
            /* Close all other popups and display popup for clicked store */
            createPopUp(clickedPoint);
          
            /* Highlight listing in sidebar (and remove highlight for all other listings) */
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            const listing = document.getElementById(
              `listing-${clickedPoint.properties.id}`
            );
            listing.classList.add('active');
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