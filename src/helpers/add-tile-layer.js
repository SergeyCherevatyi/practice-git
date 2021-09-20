import L from "leaflet";

export  function addTileLayer(map) {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VyZ2V5Y2hlIiwiYSI6ImNrdGFkYjM3cjBoYmsycG13NHBnb2h4Ym4ifQ.8M0rGmGATCnb21vcd62xZg', {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Serhii Cherevatyi</a>.',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2VyZ2V5Y2hlIiwiYSI6ImNrdGFkYjM3cjBoYmsycG13NHBnb2h4Ym4ifQ.8M0rGmGATCnb21vcd62xZg'
  }).addTo(map)
}