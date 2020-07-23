const themeDots = document.querySelectorAll(".theme-dot");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

function changeTheme(e) {
  let mode = e.target.dataset.mode;
  setTheme(mode);
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "";
  }
  if (mode == "dark") {
    document.getElementById("theme-style").href = "style/dark.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "style/green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "style/purple.css";
  }

  localStorage.setItem("theme", mode);
}

themeDots.forEach((themeDot) => {
  themeDot.addEventListener("click", changeTheme);
});
