// circleUtils.js

// Function to calculate the area of a circle
function calculateArea(radius) {
    if (radius <= 0) {
        return "Radius must be greater than zero.";
    }
    return Math.PI * radius * radius;
}

// Export the function
module.exports = { calculateArea };
