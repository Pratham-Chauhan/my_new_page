let isTyping = false; // Flag to track if typing is in progress
let i = 0; // Index for the current character being typed
let typingTimeout; // Store the timeout ID for clearing typing
const typingSpeed = 140; // Base typing speed in ms

function say(text) {
    // Clear previous typing if already in progress
    if (isTyping) {
        clearTyping(); // Clear current typing
    }

    isTyping = true; // Set the typing flag
    const elem = document.getElementById("TypeBox");
    elem.innerHTML = ""; // Clear text box for new message
    i = 0; // Reset index for new text

    const typeNextCharacter = () => {
        // Check if typing should continue
        // if (!isTyping) {
        //     return; // Exit if isTyping is false
        // }

        if (i < text.length) {
            elem.innerHTML += text[i]; // Add the next character
            i++; // Move to the next character

            // Add a longer delay after punctuation marks
            if (text[i - 1] === "," || text[i - 1] === ".") {
                typingTimeout = setTimeout(typeNextCharacter, typingSpeed * 10); // Longer pause after punctuation
            } else {
                typingTimeout = setTimeout(typeNextCharacter, typingSpeed + Math.random() * 50); // Regular typing speed
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

// Example of starting typing with a delay
setTimeout(() => say("Hi, I’m Pratham Chauhan from India, and you are from India too _"), 2000);
// setTimeout(() => say("This is the second message that appears after the first one."), 5000);
// setTimeout(() => say("You Win!"), 10000);