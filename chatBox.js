let isTyping = false; // Flag to track if typing is in progress
let Charindex = 0; // Index for the current character being typed
let typingTimeout; // Store the timeout ID for clearing typing

const typingSpeed = 50; // Base typing speed in ms

function say(text, onfinish) {
  // Clear previous typing if already in progress
  if (isTyping) {
    clearTyping(); // Clear current typing
  }

  isTyping = true; // Set the typing flag
  const elem = document.getElementById("TypeBox");
  elem.innerHTML = ""; // Clear text box for new message
  Charindex = 0; // Reset index for new text
  
  const typeNextCharacter = () => {
    // Check if typing should continue
    // if (!isTyping) {
    //     return; // Exit if isTyping is false
    // }
    if (Charindex < text.length) {
      elem.innerHTML += text[Charindex]; // Add the next character
      Charindex++; // Move to the next character

      // Add a longer delay after punctuation marks
      if (text[Charindex - 1] === "," || text[Charindex - 1] === ".") {
        typingTimeout = setTimeout(typeNextCharacter, typingSpeed * 10); // Longer pause after punctuation
      } else {
        // Regular typing speed with a small random delay
        typingTimeout = setTimeout(typeNextCharacter, typingSpeed + Math.random() * 30); // Regular typing speed
      }
      
    } else {
      isTyping = false; // Reset typing flag when done
      if (onfinish) {onfinish();}
    }
  };

  typeNextCharacter(); // Start typing
}

function clearTyping() {
  // If a typing process is in progress, clear the text field
  console.log('Clearing typing...');
  if (isTyping) {
    isTyping = false; // Reset the typing flag
    clearTimeout(typingTimeout); // Clear any active typing timeout
    document.getElementById("TypeBox").innerHTML = ""; // Clear the text box
  }
}

function greeting() {
  console.log("Running greeting function:", user_geoinfo);

  if (user_geoinfo == undefined) {
    say("Hi, I’m Pratham Chauhan from India, btw you are from India too?!");
  }
  else if (user_geoinfo.country_name == "India") {
    say(`Hi, I’m Pratham Chauhan from India, btw you are from ${user_geoinfo.country_name} too!`);// ,() => say("Halo then")
  }
  else {
    say(`Hi, I’m Pratham Chauhan from India, btw you are from ${user_geoinfo.country_name}`);
  }

  // change opacity of arrow id element to 1 after 10 sec
  setTimeout(() => document.getElementById("svg-container").style.opacity = "1", 5500)

}

// greeting()
// I got your geolocation from your ip address
// setTimeout(greeting, 2000);


// Add event listener for hover
document.getElementById('who_are_you').addEventListener('mouseenter', () => say("I know you have questions about me"));
document.getElementById('connect_bt').addEventListener('mouseenter', () => say("Sure, Let's connect!"));
document.getElementById('surprise1').addEventListener('mouseenter', () => say("Do you wanna play a game?"));
document.getElementById('surprise2').addEventListener('mouseenter', () => say("..."));