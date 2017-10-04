import React from 'react';
import fblogo from '../../img/Facebook-color.svg';
import gtlogo from '../../img/Github-color.svg';
import gllogo from '../../img/GooglePlus-color.svg';

class Footer extends React.Component {
  render() {
    return(
      <div className="row" id="footer">
        <div className="col-12">
          <div className="content-container">
            <div className="content-container-footer-copyrights">
              <div>
                <span>Geoloc</span>.ISS created by&#160;
                <span>Hubert Warzycha</span>&#160; &#169; 2017
              </div>
            </div>
            <div className="content-container-footer-contact">
              <div>
                <a href="http://facebook.com/hubert.warzycha" title="Facebook" target="_blank">
                  <img src={fblogo} alt="Facebook"/>
                </a>
              </div>
              <div>
                <a href="https://plus.google.com/u/0/112500404131775475681" title="GooglePlus" target="_blank">
                  <img src={gllogo} alt="Facebook"/>
                </a>
              </div>
              <div>
                <a href="https://github.com/hiteh" title="Github" target="_blank">
                  <img src={gtlogo} alt="Facebook"/>
                </a>
              </div>
            </div>
            <div className="content-container-footer-credits">
              <div>
                Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>&#160;
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>&#160;
                is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
              </div>
           </div>
        </div>
       </div>
      </div>

    );
  }
}

export default Footer;
