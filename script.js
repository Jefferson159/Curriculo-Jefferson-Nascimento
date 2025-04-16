document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const images = document.querySelectorAll("img");
  const cards = document.querySelectorAll(".grid > div");

  // Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
          entry.target.classList.add("translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  cards.forEach((card) => {
    card.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-1000");
    observer.observe(card);
  });

  // Animate images on hover
  images.forEach((img) => {
    img.classList.add("transition-transform", "duration-500");
    img.addEventListener("mouseover", () => {
      img.classList.add("scale-110");
    });
    img.addEventListener("mouseout", () => {
      img.classList.remove("scale-110");
    });
  });
});

// Add the new card element
const newCard = document.createElement("div");
newCard.classList.add("max-w-md", "bg-white", "shadow-lg", "rounded-lg", "overflow-hidden", "transform", "transition-transform", "duration-500", "hover:scale-105");
document.body.appendChild(newCard);

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".grid > div");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    card.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-1000");
    observer.observe(card);
  });
});