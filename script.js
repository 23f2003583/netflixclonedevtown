window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile-details.html";
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card) => {
  card.addEventListener("mouseEnter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
