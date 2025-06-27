/* 1 ▸ MAPA BASE */
const center = [3.4372,-76.5225];
const map = L.map('map').setView(center,13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
 {attribution:'© OpenStreetMap'}).addTo(map);
L.control.scale().addTo(map);

/* 2 ▸ SIDEBAR */
const sb = document.getElementById('sidebar');
document.getElementById('btnToggle').onclick=()=>sb.classList.toggle('closed');
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelector('.tab.active').classList.remove('active');
  document.querySelector('.panel.active').classList.remove('active');
  t.classList.add('active');
  document.getElementById('panel-'+t.dataset.tab).classList.add('active');
}));

/* 3 ▸ FUNCIONES */
function goHome(){map.setView(center,13);}
function locateUser(){map.locate({setView:true,maxZoom:17});}

/* 4 ▸ CAPAS DEMO */
let bike,bus;
function toggleLayer(id){
  if(id==='bike'){
    if(bike){map.removeLayer(bike);bike=null;return;}
    fetch('data/bici_carriles.geojson')
      .then(r=>r.json())
      .then(gj=>{
        bike=L.geoJSON(gj,{style:{color:'#7CC654',weight:4}}).addTo(map);
        addLegend('Bicicarriles','#7CC654');
      })
      .catch(()=>alert('Falta data/bici_carriles.geojson'));
  }
  if(id==='bus'){
    if(bus){map.removeLayer(bus);bus=null;return;}
    bus=L.tileLayer.wms('https://TU_SERVIDOR/geoserver/wms',{
      layers:'movilidad:rutas_bus',format:'image/png',transparent:true
    }).addTo(map);
    addLegend('Rutas bus','#006699');
  }
}

/* 5 ▸ HERRAMIENTAS EXTRA */
// Medir
L.control.measure({primaryLengthUnit:'meters'}).addTo(map);
// Lupa (ZoomBox)
L.control.zoomBox({title:"Lupa"}).addTo(map);
// Resaltar localización
map.on('locationfound',e=>L.circle(e.latlng,{radius:e.accuracy/2,color:'#3388ff'})
  .addTo(map).bindPopup('Aquí estás').openPopup());

/* 6 ▸ LEYENDA */
const legendBox=document.getElementById('legend-content');
function addLegend(text,color){
  legendBox.innerHTML+=`<p><span style="display:inline-block;width:18px;height:3px;background:${color};margin-right:6px"></span>${text}</p>`;
}
