mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVkYTE2IiwiYSI6ImNrcmplYTFkeDZ6N3YzMXBhMjM2dGM3ZGoifQ.4e4nl5NnRvPurHhhf_DE5Q";

const map1 = document.querySelector("#map");
const map2 = document.querySelector("#mapbuat");
const map3 = document.querySelector("#mapcari");
let marker;
// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<img class="img-thumbnail rounded-circle small" src="assets/img/undraw_profile.svg" width="64px">
  <h4>Penangkaran Kucing UPI</h4>
  <p>Penangkaran kucing ini berdiri sejak 1999</p>
  <p>Jl. Pendidikan No.15, Cibiru Wetan, Cileunyi, Bandung, Jawa Barat 40625</p>
  <a href="tel:081242337968" class="btn btn-primary">Hubungi kami</a>`
);

// create DOM element for the marker
const el = document.createElement("div");
el.id = "marker";

if (map1) {
  const map = new mapboxgl.Map({
    container: "mapid", // container ID
    style: "mapbox://styles/huda16/ckrjgm3cv0teu17qrx6vy6ju1", // style URL
    center: [107.725, -6.94], // starting position [lng, lat]
    zoom: 16, // starting zoom
  });

  // create the marker
  marker = new mapboxgl.Marker(el)
    .setLngLat([107.725, -6.94])
    .setPopup(popup)
    .addTo(map);
} else if (map2) {
  const mapbuat = new mapboxgl.Map({
    container: "mapbuat", // container ID
    style: "mapbox://styles/huda16/ckrjgm3cv0teu17qrx6vy6ju1", // style URL
    center: [107.725, -6.94], // starting position [lng, lat]
    zoom: 16, // starting zoom
  });

  // create the marker
  marker = new mapboxgl.Marker(el)
    .setLngLat([107.725, -6.94])
    .setPopup(popup)
    .addTo(mapbuat);
} else if (map3) {
  const mapcari = new mapboxgl.Map({
    container: "mapcari", // container ID
    style: "mapbox://styles/huda16/ckrjgm3cv0teu17qrx6vy6ju1", // style URL
    center: [107.725, -6.94], // starting position [lng, lat]
    zoom: 16, // starting zoom
  });
  // create the marker
  marker = new mapboxgl.Marker(el)
    .setLngLat([107.725, -6.94])
    .setPopup(popup)
    .addTo(mapcari);
}
