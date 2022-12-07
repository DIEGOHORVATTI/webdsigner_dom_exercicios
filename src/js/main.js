const container = document.getElementById("selectTheme");
const buttun = document.getElementById("dark");

function darkMode() {
  let targetTheme =
    container.getAttribute("data-theme") === "dark" ? "light" : "dark";

  container.setAttribute("data-theme", targetTheme);

  localStorage.setItem("theme", targetTheme);

  setTimeout(function () {
    container.style.transitionDuration = "2s";
  }, 0.5);
}

function trocaMode() {
  darkMode();
}
