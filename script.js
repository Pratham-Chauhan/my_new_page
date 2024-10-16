
// Call the IP geolocation API
var user_geoinfo;
var apiKey = "4c80968bd91f41afb52cbdf1a5d53733"

function get_location() {
  console.log("Fetching location info...");

  fetch("https://api.ipgeolocation.io/ipgeo?apiKey=" + apiKey)
    .then((response) => response.json())
    .then((data) => {
      // console.log("Geolocation Info:", data);
      user_geoinfo = data;

      setTimeout(greeting, 1000);

      finalDistance = haversineDistance([28.45950, 77.02664], [user_geoinfo.latitude, user_geoinfo.longitude])
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
    });
}
// Call the function when the page loads
window.onload = function() {
    get_location(); 
    // setTimeout(greeting, 2000);
};
// get_location();

function add_grid() {
  const body = document.getElementsByTagName('body')[0];

  body.style.backgroundImage = 
    'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px), ' +
    'linear-gradient(90deg, rgba(0, 0, 0, 0.10) 1px, transparent 1px)';
  body.style.backgroundSize = '40px 40px';
}



document.getElementById('svg-container').addEventListener('click', function() {
  // Fade out the container
  var container = document.getElementById("svg-container")
  container.style.transition = "opacity 0.6s ease";
  container.style.opacity = "0";

  // Wait for the opacity transition to finish, then remove the element from the DOM
  // setTimeout(() => {
  //     this.remove();
  // }, 900); // Matches the 0.8s transition duration in CSS

  document.getElementById("TypeBox").innerHTML = ""; 

  // hide grid
  document.body.style.backgroundImage = "none";

  setTimeout(() => {
    say(`we are approx ${finalDistance.toFixed(1)} km apart and still somehow you found me.`)
  }, 100)
});



add_grid();
// setTimeout(add_grid, 8000)

var finalDistance;

function haversineDistance([lat1, lon1], [lat2, lon2], isMiles = false) {
  const toRadian = angle => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  if (isMiles) {
    finalDistance /= 1.60934;
  }
  console.log('haversineDistance:', finalDistance)
  return finalDistance;
};
 

