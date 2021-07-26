mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVkYTE2IiwiYSI6ImNrcmplYTFkeDZ6N3YzMXBhMjM2dGM3ZGoifQ.4e4nl5NnRvPurHhhf_DE5Q";

var map = new mapboxgl.Map({
  container: "mapid", // container ID
  style: "mapbox://styles/huda16/ckrjgm3cv0teu17qrx6vy6ju1", // style URL
  center: [107.725, -6.94], // starting position [lng, lat]
  zoom: 16, // starting zoom
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<img class="img-thumbnail rounded-circle small" src="assets/img/undraw_profile.svg" width="64px">
  <h4>Penangkaran Kucing UPI</h4>
  <p>Penangkaran kucing ini berdiri sejak 1999</p>
  <p>Jl. Pendidikan No.15, Cibiru Wetan, Cileunyi, Bandung, Jawa Barat 40625</p>
  <a href="tel:081242337968" class="btn btn-primary">Hubungi kami</a>`
);

// create DOM element for the marker
var el = document.createElement("div");
el.id = "marker";

// create the marker
var marker = new mapboxgl.Marker(el)
  .setLngLat([107.725, -6.94])
  .setPopup(popup)
  .addTo(map);
