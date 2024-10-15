
// Call the IP geolocation API

var user_country;
var user_geoinfo;
function get_location() {
  fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Country:", data);
      user_geoinfo = data;
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
    });
}
get_location();

// change opacity of arrow id element to 1 after 10 sec
setTimeout(() => document.getElementById("svg-container").style.opacity = "1", 8000)

function add_grid() {
  const body = document.getElementsByTagName('body')[0];

  body.style.backgroundImage = 
    'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px), ' +
    'linear-gradient(90deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px)';
  body.style.backgroundSize = '40px 40px';
}

// add_grid();

// setTimeout(add_grid, 8000)