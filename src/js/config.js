export const config = {
  app: {
    REFRESH_RATE: 2, //(seconds)
  },
  wheretheissatAPI: {
    KEY: "",
    VERSION: "1",
    ENDPOINT: "https://api.wheretheiss.at/",
    SATELLITE_NORAD_ID: "25544",
  },
  googleAPI: {
    KEY: "",
    VERSION: "3.28",
    ENDPOINT: "https://maps.googleapis.com/maps/api/js",
    ZOOM: 3,
    MARKER_ANIMATION: 4,
    MARKER_SIZE: {width: 100, height: 100},
    INFOWINDOW_PIXELOFFSET: {width: 0, height: 20},
    MARKER_TITLE: "International Space Station",
  },
}
