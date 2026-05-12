const menu = document.getElementById("menu");

window.onload = init;

function init() {
  changeMenu();
}


function changeMenu() {
  if (sessionStorage.getItem("website_token")) {
    menu.innerHTML = `
    <li><a href="index.html" id="startsida">Startsida</a></li>
    <li><a href="protected.html" id="admin-page">Admin</a></li>
    <li class="no-design"><button id="logout-button" class="logout-button">Logga ut</button></li>
    `
  } else {
    menu.innerHTML = `
    <li><a href="index.html" id="startsida">Startsida</a></li>
    <li><a href="register.html" id="register-page">Registrera dig</a></li>
    <li><a href="login.html" id="login-page">Logga in</a></li>
    `
  }

  const logoutBtn = document.getElementById("logout-button");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("website_token");
      window.location.href = "login.html";
    });
  }
}