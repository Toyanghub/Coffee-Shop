const button = document.querySelector(
  '[data-collapse-toggle="navbar-default"]'
);
const fullscreenMenu = document.getElementById("navbar-default-fullscreen");

button.addEventListener("click", () => {
  fullscreenMenu.classList.toggle("hidden");
});
