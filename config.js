const layers = [
  {
    name: "Comuna 19",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:comuna19&outputFormat=application/json",
    style: { color: "#000000", weight: 3, fillColor: "#ccffcc", fillOpacity: 0.2 },
    pane: "comunaPane",            
  interactive: false
  },
  {
    name: "Vías",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:calles&outputFormat=application/json",
    style: { color: "#666666", weight: 1 }
  },
  {
    name: "Ciclorrutas",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:ciclorutas&outputFormat=application/json",
    style: { color: "#0099cc", weight: 2 }
  },
  {
    name: "Estaciones del MIO",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:estaciones%20del%20mio&outputFormat=application/json",
    style: { color: "#003366", weight: 1, fillColor: "#003366", fillOpacity: 0.5 }
  },
  {
    name: "Paradas de MIO",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:paradas%20de%20mio&outputFormat=application/json",
    pointStyle: { radius: 3, color: "#000000", fillColor: "#33cc33", fillOpacity: 1, weight: 1 }
  },
  {
    name: "Tramos Restricciones Viales",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:tramos_restricciones_viales&outputFormat=application/json",
    style: { color: "#FF0000", weight: 4 }
  },
  {
    name: "Áreas de Alta Demanda",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:areas_alta_demanda&outputFormat=application/json",
    style: { color: "#FFFF66", weight: 1, fillColor: "#FFFF66", fillOpacity: 0.4 }
  },
  {
    name: "Puntos Semáforos Dañados",
    url: "http://ec2-54-236-112-99.compute-1.amazonaws.com:8080/geoserver/movilidadcomuna19/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=movilidadcomuna19:puntos_semaforos_danados&outputFormat=application/json",
    pointStyle: { radius: 6, color: "#000000", fillColor: "#FF0000", fillOpacity: 1, weight: 1 }
  }
];

