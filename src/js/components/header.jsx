import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../img/vectorpaint.svg'

class Header extends React.Component {
  render() {
    return(
      <div className="row" id="header">
        <div className="col-12">
          <div className="content-container">
            <div className="content-container-brand">
              <div className="content-container-brand-main"><h1>Geoloc<span>.ISS</span></h1></div>
              <div className="content-container-brand-footer">Powered by &#160;
                <a href="http://wheretheiss.at/" title="wheretheissat" target="_blank">wheretheiss.at API</a>&#160;and&#160;
                 <a href="https://developers.google.com/maps/" title="GoogleMaps" target="_blank">Google Maps API</a>
               </div>
            </div>
            <div className="content-container-logo">
              <img src={logo} alt="GeolocISS"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
