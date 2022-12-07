const container: any = document.getElementById("selectTheme");
const buttun: any = document.getElementById("dark");

function darkMode() {
  let targetTheme =
    container.getAttribute("data-theme") === "dark" ? "light" : "dark";

  container.setAttribute("data-theme", targetTheme);

  localStorage.setItem("theme", targetTheme);
}

function trocaMode() {
  darkMode();
}

function kapa() {
  darkMode();
}
