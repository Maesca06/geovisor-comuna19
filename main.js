// Inicializar el mapa en Cali
var map = L.map('map').setView([3.4372, -76.5225], 13);

// Capa base OSM
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
  maxZoom: 19
}).addTo(map);

// Puedes agregar aquí controles adicionales como escala o ubicación
L.control.scale().addTo(map);
