/**************************************************************
 * 0 ▸ Config. inicial
 **************************************************************/
const centerCali = [3.4372, -76.5225];
const map = L.map('map').setView(centerCali, 13);

/*** BaseMap layers ***/
const osm     = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);
const cartoV  = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{attribution:'© Carto'});
const baseMaps = { "OSM":osm, "Carto Lite":cartoV };
L.control.layers(baseMaps,null,{position:'bottomleft'}).addTo(map);
L.control.scale().addTo(map);

/**************************************************************
 * 1 ▸ Sidebar – abrir/cerrar
 **************************************************************/
const sidebar  = document.getElementById('sidebar');
document.getElementById('btnToggle').onclick = () => sidebar.classList.toggle('closed');

/* Cambiar pestañas */
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=> {
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.panel.active').classList.remove('active');
    tab.classList.add('active');
    document.getElementById('panel-'+tab.dataset.tab).classList.add('active');
  });
});

/**************************************************************
 * 2 ▸ Funciones utilitarias
 **************************************************************/
function goHome(){ map.setView(centerCali, 13); }
function locateUser(){ map.locate({setView:true,maxZoom:17}); }

/**************************************************************
 * 3 ▸ Capas demo (place‑holders)
 **************************************************************/
let layerBike, layerBus;

function toggleLayer(id){
  if(id === 'bike'){
    if(layerBike){ map.removeLayer(layerBike); layerBike=null; return; }
    fetch('data/bici_carriles.geojson')          // ← reemplaza por tu GeoJSON real
      .then(r=>r.json())
      .then(gj=>{
        layerBike = L.geoJSON(gj,{style:{color:'#7CC654',weight:4}}).addTo(map);
        addLegend('Bicicarriles','#7CC654');
      })
      .catch(()=>alert('⚠️ No se encontró data/bici_carriles.geojson'));
  }

  if(id === 'bus'){
    if(layerBus){ map.removeLayer(layerBus); layerBus=null; return; }
    layerBus = L.tileLayer.wms('https://TU_SERVIDOR/geoserver/movilidad/wms',{
      layers:'movilidad:rutas_bus',format:'image/png',transparent:true
    }).addTo(map);
    addLegend('Rutas bus','#006699');
  }
}

/**************************************************************
 * 4 ▸ Leyenda sencilla
 **************************************************************/
const legendBox = document.getElementById('legend-content');
function addLegend(name,color){
  const html = `<p><span style="display:inline-block;width:18px;height:3px;
                              background:${color};margin-right:6px;"></span>${name}</p>`;
  legendBox.insertAdjacentHTML('beforeend',html);
}

