import './mapArea.css';
import Map from '../../map/map';

function MapArea () {

    return (
        <div className="MapArea">
            <div className="banner">
                <h1>MAP</h1>
            </div>
            <div className='sidebar'>
                <div className='heading'>
                    <h1>Womens Health Clinics</h1>
                </div>
                <div id='listings' className='listings'>
                </div>
            </div>
            <div id="map" className="map">
                <Map />
            </div>
        </div>
    )
}

export default MapArea