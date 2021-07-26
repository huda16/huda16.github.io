mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVkYTE2IiwiYSI6ImNrcmplYTFkeDZ6N3YzMXBhMjM2dGM3ZGoifQ.4e4nl5NnRvPurHhhf_DE5Q";

var map = new mapboxgl.Map({
  container: "mapid", // container ID
  style: "mapbox://styles/huda16/ckrjgm3cv0teu17qrx6vy6ju1", // style URL
  center: [107.725, -6.94], // starting position [lng, lat]
  zoom: 16, // starting zoom
  marker: [107.725432, -6.940038],
});

var marker = new mapboxgl.Marker().setLngLat([107.725, -6.94]).addTo(map);
