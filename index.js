// Helper function to calculate the volume of a sphere
function calculateSphereVolume(radius) {
    return (4/3) * Math.PI * Math.pow(radius, 3);
  }
  
  // Helper function to check if a string is a valid email address
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to generate a random integer within a specified range
  function getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Volume of a sphere with radius 3:", calculateSphereVolume(3)); // Output: Approximately 113.097
    console.log("Is 'example@email.com' a valid email address?", isValidEmail('example@email.com'));   // Output: true
    console.log("Is 'invalid.email' a valid email address?", isValidEmail('invalid.email'));   // Output: false
  
    // Generate and print 5 random integers between 50 and 100
    console.log("Random integers between 50 and 100:");
    for (let i = 0; i < 5; i++) {
      console.log(getRandomIntegerInRange(50, 100));
    }
  }
  
  // Call the main function
  main();
  