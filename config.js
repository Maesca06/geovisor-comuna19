const layers = [
  {
    name: "Comuna 19",
    url: "Capas GEO/Comuna 19.geojson",
    style: { color: "#000000", weight: 3, fillColor: "#ccffcc", fillOpacity: 0.2 },
    pane: "comunaPane",            
  interactive: false
  },
  {
    name: "Vías",
    url: "Capas GEO/Vias.geojson",
    style: { color: "#666666", weight: 1 }
  },
  {
    name: "Ciclorrutas",
    url: "Capas GEO/Ciclorutas.geojson",
    style: { color: "#0099cc", weight: 2 }
  },
  {
    name: "Estaciones del MIO",
    url: "Capas GEO/Estaciones de MIO.geojson",
    style: { color: "#003366", weight: 1, fillColor: "#003366", fillOpacity: 0.5 }
  },
  {
    name: "Paradas de MIO",
    url: "Capas GEO/Paradas de MIO.geojson",
    pointStyle: { radius: 3, color: "#000000", fillColor: "#33cc33", fillOpacity: 1, weight: 1 }
  },
  {
    name: "Tramos Restricciones Viales",
    url: "Capas GEO/Tramos con restriciones viales.geojson",
    style: { color: "#FF0000", weight: 4 }
  },
  {
    name: "Áreas de Alta Demanda",
    url: "Capas GEO/Áreas con alta demanda.geojson",
    style: { color: "#FFFF66", weight: 1, fillColor: "#FFFF66", fillOpacity: 0.4 }
  },
  {
    name: "Puntos Semáforos Dañados",
    url: "Capas GEO/Puntos de semaforos dañados.geojson",
    pointStyle: { radius: 6, color: "#000000", fillColor: "#FF0000", fillOpacity: 1, weight: 1 }
  }
];

