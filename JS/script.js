// toggle class active
const navbarNav = document.querySelector(".navbar .navbar-nav");
const hambugerMenu = document.querySelector(
  ".navbar .navbar-eks#hamburger-menu"
);

hambugerMenu.addEventListener("click", function (h) {
  h.preventDefault();
  navbarNav.classList.toggle("nav-active");
});

// Click selain hamburger menu && diluar navbar-nav
document.addEventListener("click", function (e) {
  if (!hambugerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("nav-active");
  }
});

// navbar active
// scroll
const navBar = document.querySelector(".navbar");
const section = document.querySelector("section");
const navColor = document.querySelectorAll(".navbar .navbar-nav a");
let style = window.getComputedStyle(section);
let maxWidth = parseFloat(style.getPropertyValue("width"));

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && maxWidth > 768) {
    navBar.classList.add("navbar-scroll");
    navColor.forEach((e) => {
      e.classList.add("nav-scroll");
    });
  } else {
    navBar.classList.remove("navbar-scroll");
    navColor.forEach((e) => {
      e.classList.remove("nav-scroll");
    });
  }
});

let GetScrollnNum = () => {
  let active;

  switch (true) {
    case window.scrollY >= 2100:
      active = document.querySelector(".navbar-content.contact");
      break;
    case window.scrollY >= 1300:
      active = document.querySelector(".navbar-content.menu");
      break;
    case window.scrollY >= 600:
      active = document.querySelector(".navbar-content.about");
      break;
    case window.scrollY < 300:
      active = document.querySelector(".navbar-content.home");
      break;

    default:
      break;
  }
  return active;
};

const navbarContent = document.querySelectorAll(
  ".navbar .navbar-nav .navbar-content"
);
console.log(navbarContent);

let UpdateActiveClass = (target) => {
  navbarContent.forEach((e) => e.classList.remove("active"));

  if (target) {
    target.classList.add("active");
  }
};

navbarContent.forEach((e) => {
  e.addEventListener("click", (e) => {
    UpdateActiveClass(e.target);
  });
});

window.addEventListener("scroll", () => {
  const targetScroll = GetScrollnNum();
  UpdateActiveClass(targetScroll);
});

// Animation Hero Header
const heroHeader = document.querySelector(".hero .content h1 span");

let heroAnimation = () => {
  setTimeout(() => {
    heroHeader.textContent = "Stylish Steps";
  }, 1500);

  setTimeout(() => {
    heroHeader.textContent = "Comfortable Every Day";
  }, 4500);

  setTimeout(() => {
    heroHeader.textContent = "Trend Without Limits";
  }, 7500);
};

heroAnimation();
setInterval(heroAnimation, 9000);
