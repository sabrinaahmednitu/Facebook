
var settingsmenu = document.querySelector('.settings-menu');
console.log(settingsmenu)
function settingsMenuToggle() {
 settingsmenu.classList.toggle('settings-menu-height');
}


// dark button
var darkbtn = document.getElementById('dark-btn');
darkbtn.onclick = function () {
  darkbtn.classList.toggle('dark-btn-on');
  // dark background
  document.body.classList.toggle('dark-theme');
}


