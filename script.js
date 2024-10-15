// Call the IP geolocation API
function fetch(url) {
  fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => {
      // Extract and display the country
      console.log("Country:", data);
      document.getElementById(
        "country"
      ).textContent = `You are visiting from ${data.city}, ${data.country}`;
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
      document.getElementById("country").textContent =
        "Could not determine your country.";
    });
}


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