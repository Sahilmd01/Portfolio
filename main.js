const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const downloadCv = document.getElementById("download-cv");

downloadCv.addEventListener("click", (e) => {
  const aElement = document.createElement("a");
  aElement.setAttribute("download", "CV.pdf");
  aElement.setAttribute("href", "/assets/CV.pdf");
  aElement.click();
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const progressBar = document.querySelectorAll(".about__progressbar");

Array.from(progressBar).forEach((bar) => {
  const progress = bar.dataset.progress;
  bar.querySelector("span").style.width = progress + "%";
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .about__progress", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

const tabList = document.querySelector(".resume__tablist");

tabList.addEventListener("click", (e) => {
  const tabIndex = e.target.dataset.tab;
  if (!tabIndex) return;

  const tabs = document.querySelectorAll("[data-tab]");
  Array.from(tabs).forEach((tab) => {
    if (tab.dataset.tab === tabIndex) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  const activePanel = document.querySelector(".panel__grid.active");
  const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
  if (activePanel.dataset.panel === tabIndex) return;
  activePanel.classList.add("close");
  activePanel.addEventListener(
    "animationend",
    (e) => {
      activePanel.classList.remove("active");
      activePanel.classList.remove("close");
      toActivePanel.classList.add("active");
    },
    { once: true }
  );
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
});

