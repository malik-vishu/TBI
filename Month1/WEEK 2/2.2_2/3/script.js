// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#element", {
    strings: ["Web Developer", "Flutter Developer", "TensorFlow Developer"],
    typeSpeed: 50,
    loop: true,
  });

  const skillBars = document.querySelectorAll(".skillBar");

  // Create an intersection observer for each skillBar
  const observer = new IntersectionObserver(
    (entries) => {
      // If the skillBar is in the viewport, add the animation to the skillBar
      if (entries[0].isIntersecting) {
        entries[0].target.style.animation = "bar 1.5s ease-in-out";
      } else {
        entries[0].target.style.animation = "none";
      }
    },
    { threshold: 0.1 }
  );

  // Start observing each skillBar
  skillBars.forEach((skillBar) => {
    observer.observe(skillBar);
  });

  skillBars.forEach((skillBar) => {
    skillBar.addEventListener("mouseover", () => {
      // Change the background color of the skillBar
      skillBar.style.backgroundColor = "#555";
    });
    // Add a mouseout event listener to each skillBar
    skillBar.addEventListener("mouseout", () => {
      // Change the background color of the skillBar back to the original color
      skillBar.style.backgroundColor = "";
    });
  });
  // Get the projectCards
  const projectCards = document.querySelectorAll(".projectCard");

  // Add a hover effect to each projectCard
  projectCards.forEach((projectCard) => {
    projectCard.addEventListener("mouseover", () => {
      projectCard.style.transform = "scale(1.1)";
    });

    projectCard.addEventListener("mouseout", () => {
      projectCard.style.transform = "scale(1)";
    });
  });
});
