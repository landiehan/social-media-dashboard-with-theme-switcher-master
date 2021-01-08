const toggle = document.querySelector("#toggle");
const currentTheme = localStorage.getItem("data-theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  }
}
toggle.addEventListener("change", switchTheme);