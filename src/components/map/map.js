import './map.css';
import { useSelector } from 'react-redux';

import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  
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

    function flyToClinic(currentFeature) {
      map.current.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
    }

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
          
            /* Highlight listing in sidebar (and remove highlight for all other listings) 
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            const listing = document.getElementById(
              `listing-${clickedPoint.properties.id}`
            );
            listing.classList.add('active');

            */
        });
    });

    return (
      <div className="MapArea">
        <div className="banner">
            <h1>MAP</h1>
        </div>
        <div className="SideBar">
          <div className='heading'>
              <h1>Womens Health Clinics</h1>
          </div>
          <div className='listings'>
            {/* Clinic Name */}
            { clinics.features.map( clinic => {
              return (
                <div className="item">
                  <p className="title" onClick={flyToClinic}> { clinic.properties.name } </p>
                  <p> { clinic.properties.address } | { clinic.properties.phoneFormatted }</p>
                </div>
              )
            } ) }
          </div>
        </div>
        <div className="Map">
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    )
}

export default Map