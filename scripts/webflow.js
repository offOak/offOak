document.addEventListener("DOMContentLoaded", function () {
  const tickerElements = document.querySelectorAll(".c-ticker-content");
  let percentage = 0;
  const increment = 0.05;
  const animationDuration = 30 * 1000; // 30 seconds in milliseconds

  function updateTicker() {
      for (const tickerElement of tickerElements) {
          tickerElement.style.transform = `translate3d(${percentage.toFixed(3)}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }
      percentage -= increment;
      if (percentage < -100) {
          percentage = 0;
      }
  }

  function startAnimation() {
      // Calculate the total number of steps needed to complete the animation
      const totalSteps = Math.ceil(100 / increment);

      // Calculate the time interval for each step to maintain the desired duration
      const interval = animationDuration / totalSteps;

      // Use setInterval to continue the animation
      const animationInterval = setInterval(updateTicker, interval);

      // Clear the interval and restart the animation after the animation duration is complete
      setTimeout(function () {
          clearInterval(animationInterval);
          percentage = 0;
          startAnimation(); // Restart the animation
      }, animationDuration);
  }

  // Start the initial animation
  startAnimation();
});
