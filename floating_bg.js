// Floating Bubble Class
function FloatingBubble(options) {
    this.cx = options.cx;
    this.cy = options.cy;
    this.r = options.r;
    this.opacity = options.opacity;

    // Create bubble view
    this.view = s.circle(this.cx, this.cy, this.r).attr({
        //   fill: s.gradient("r(0.5, 0.5, 0.5)#6fa3ef-#9cc7f3-#ffffff"),
        fill: '#7A7A7A',
        // fill: "transparent",
        // fill:'red',
        stroke: "black",
        strokeWidth: 2,
        opacity: this.opacity,

        //   style: 'filter: blur(80px);'
    });

    // Floating animation with random movement
    FloatingBubble.prototype.floatingAnimation = function () {
        var delta = 50; // Increased movement range
        var newX = this.cx + getRandomInt(-delta, delta);
        var newY = this.cy + getRandomInt(-delta, delta);
        var newOpacity = Math.random() * 0.8 + 0.2; // Vary opacity

        this.view.animate(
            {
                cx: newX,
                cy: newY,
                opacity: newOpacity,
            },
            5000,
            mina.easeinout,
            this.floatingAnimation.bind(this)
        ); // Smooth animation
    };

    // Circular animation
    //   FloatingBubble.prototype.circularAnimation = function (newX, newY) {
    //     this.view.animate(
    //       {
    //         cx: newX,
    //         cy: newY,
    //       },
    //       1000,
    //       mina.easeinout
    //     ); // Slower movement
    //   };

    // Adding gradient to simulate bubble shine
    //   FloatingBubble.prototype.addGradient = function () {
    //     var gradient = s.gradient("r(0.5, 0.5, 0.5)#fff-#80dfff:80-#4ddbff:100"); // Radial gradient

    //     this.view.attr({
    //       fill: gradient,
    //     });
    //   };

    // Stop animation
    // FloatingBubble.prototype.stopAnimation = function () {
    //   this.view.stop();
    // };
}

// Initialize Snap SVG and create multiple bubbles
var s = Snap(window.innerWidth, window.innerHeight),
    bubbles = [];

// Apply CSS styles using JavaScript
s.node.style.position = "absolute";
s.node.style.top = "0";
s.node.style.left = "0";
s.node.style.opacity = "0.5";
s.node.style.zIndex = "-2";

for (var i = 0; Charindex <= 3; ++Charindex) {
    var options = {
        opacity: 1 - Charindex / 8, // Gradual transparency
        cx: getRandomInt(50, window.innerWidth - 100), // Random X position
        cy: getRandomInt(50, window.innerHeight - 50), // Random Y position
        r: Charindex * 16 + 30, // Radius increases with each bubble
    };

    var bubble = new FloatingBubble(options);
    //   bubble.addGradient(); // Add gradient on creation
    bubbles.push(bubble);
}

// Switch animation buttons
// document.getElementById('stop').onclick = function () {
//   bubbles.forEach(function (bubble) {
//     bubble.stopAnimation();
//   });
// };

// document.getElementById('anim1').onclick = function () {

// };
bubbles.forEach(function (bubble) {
    // bubble.stopAnimation();
    bubble.floatingAnimation(); // Start floating animation
});

// document.getElementById('anim2').onclick = function () {
//   bubbles.forEach(function (bubble, index) {
//     bubble.stopAnimation();
//     bubble.circularAnimation(200, 200); // Move to center (200, 200)
//   });
// };

// Helper function to get random integers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
