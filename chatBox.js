let isTyping = false; // Flag to track if typing is in progress
let Charindex = 0; // Index for the current character being typed
let typingTimeout; // Store the timeout ID for clearing typing

const typingSpeed = 50; // Base typing speed in ms

function say(text) {
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
    }
  };

  typeNextCharacter(); // Start typing
}

function clearTyping() {
  // If a typing process is in progress, clear the text field
  if (isTyping) {
    isTyping = false; // Reset the typing flag
    clearTimeout(typingTimeout); // Clear any active typing timeout
    document.getElementById("TypeBox").innerHTML = ""; // Clear the text box
  }
}


setTimeout(() => say("Hi, I’m Pratham Chauhan from India, and you are from India too"), 2000);
