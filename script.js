function toggleNav() {
  const outerGrid = document.querySelector(".main-grid-container");
  outerGrid.classList.toggle("main-grid-container-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
