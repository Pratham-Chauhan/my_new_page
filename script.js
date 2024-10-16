
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
get_location();

function add_grid() {
  const body = document.getElementsByTagName('body')[0];

  body.style.backgroundImage = 
    'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px), ' +
    'linear-gradient(90deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px)';
  body.style.backgroundSize = '40px 40px';
}


// change opacity of arrow id element to 1 after 10 sec
setTimeout(() => document.getElementById("svg-container").style.opacity = "1", 8000)

document.getElementById('svg-container').addEventListener('click', function() {
  // Fade out the container
  var container = document.getElementById("svg-container")
  container.style.transition = "opacity 0.6s ease";
  container.style.opacity = "0";

  // Wait for the opacity transition to finish, then remove the element from the DOM
  setTimeout(() => {
      this.remove();
  }, 900); // Matches the 0.8s transition duration in CSS

  document.getElementById("TypeBox").innerHTML = ""; 

  // hide grid
  document.body.style.backgroundImage = "none";
});



add_grid();
// setTimeout(add_grid, 8000)
