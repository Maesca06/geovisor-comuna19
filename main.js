/******************************************************************
 * 1 ▸ MAPA BASE
 ******************************************************************/
const map = L.map("map").setView([3.4372, -76.5225], 13);

// OpenStreetMap base
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
  maxZoom: 19
}).addTo(map);

L.control.scale().addTo(map);

/******************************************************************
 * 2 ▸ SIDEBAR: abrir / cerrar
 ******************************************************************/
const sidebar = document.getElementById("sidebar");
document.getElementById("btn-toggle").onclick = () => {
  sidebar.classList.toggle("closed");
};

/******************************************************************
 * 3 ▸ FUNCIONES BÁSICAS
 ******************************************************************/
function volverInicio() {
  map.setView([3.4372, -76.5225], 13);
}

function localizarUsuario() {
  map.locate({ setView: true, maxZoom: 17 });
}

/******************************************************************
 * 4 ▸ CAPAS DE EJEMPLO (reemplázalas por tus GeoJSON o WMS)
 ******************************************************************/
let capaBike, capaBus;

// Bicicarriles (ejemplo GeoJSON local)
function toggleBikeLanes(visible) {
  if (visible) {
    fetch("data/bici_carriles.geojson") // ← reemplaza por tu archivo
      .then(r => r.json())
      .then(geojson => {
        capaBike = L.geoJSON(geojson, {
          style: { color: "#88c057", weight: 3 }
        }).addTo(map);
      });
  } else if (capaBike) {
    map.removeLayer(capaBike);
  }
}

// Rutas de bus (ejemplo WMS desde GeoServer)
function toggleBusRoutes(visible) {
  if (visible) {
    capaBus = L.tileLayer.wms("https://TU_SERVIDOR/geoserver/movilidad/wms", {
      layers: "movilidad:rutas_bus",
      format: "image/png",
      transparent: true
    }).addTo(map);
  } else if (capaBus) {
    map.removeLayer(capaBus);
  }
}

