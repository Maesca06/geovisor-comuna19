/**************************************************************
 * 5 ▸ Herramientas: medición, lupa, localización
 **************************************************************/

// Medición de distancia (Leaflet.Measure)
const measureControl = new L.Control.Measure({
  primaryLengthUnit: 'meters',
  secondaryLengthUnit: 'kilometers',
  activeColor: '#ff6a00',
  completedColor: '#006699'
});
measureControl.addTo(map);

// ZoomBox (lupa rectangular)
L.control.zoomBox({ modal: true, title: "Ampliar zona" }).addTo(map);

// Localización automática al cargar
map.on('locationfound', function (e) {
  L.circle(e.latlng, { radius: e.accuracy / 2, color: '#3388ff' }).addTo(map)
    .bindPopup("Estás aquí").openPopup();
});
