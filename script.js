
// Call the IP geolocation API
var user_geoinfo;
var apiKey = "4c80968bd91f41afb52cbdf1a5d53733"
function get_location() {
  fetch("https://api.ipgeolocation.io/ipgeo?apiKey=" + apiKey)
    .then((response) => response.json())
    .then((data) => {
      console.log("Geolocation Info:", data);
      user_geoinfo = data;
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
    });
}
// get_location();

// change opacity of arrow id element to 1 after 10 sec
setTimeout(() => document.getElementById("svg-container").style.opacity = "1", 8000)

function add_grid() {
  const body = document.getElementsByTagName('body')[0];

  body.style.backgroundImage = 
    'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px), ' +
    'linear-gradient(90deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px)';
  body.style.backgroundSize = '40px 40px';
}

add_grid();

// setTimeout(add_grid, 8000)