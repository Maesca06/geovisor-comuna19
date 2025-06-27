// Crear el mapa centrado en Cali
var map = L.map('map').setView([3.4372, -76.5225], 13);

// Capa base OSM
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
  maxZoom: 19
}).addTo(map);

// Botón "Volver al inicio"
function volverInicio() {
  map.setView([3.4372, -76.5225], 13);
}

// Función para cargar una capa GeoJSON desde el menú
let capaActual;

function cargarCapa(ruta) {
  if (capaActual) {
    map.removeLayer(capaActual);
  }
  if (ruta) {
    fetch(ruta)
      .then(res => res.json())
      .then(data => {
        capaActual = L.geoJSON(data).addTo(map);
        map.fitBounds(capaActual.getBounds());
      })
      .catch(err => alert("Error al cargar la capa: " + err));
  }
}


