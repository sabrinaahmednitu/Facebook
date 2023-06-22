
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
    
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
}

// dark/white background save on localstorage after refresh

if(localStorage.getItem('theme') == 'light') {
  darkbtn.classList.remove('dark-btn-on');
  document.body.classList.remove('dark-theme');
}

else if(localStorage.getItem('theme') == 'dark') {
  darkbtn.classList.add('dark-btn-on');
  document.body.classList.add('dark-theme');
}

else {
    localStorage.setItem('theme', 'light');
}

// localStorage.setItem("theme", "dark");
// localStorage.setItem("theme");
