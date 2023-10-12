var btnToggle1 = document.querySelector('.toggle');
var sidebar1 = document.getElementById('sidebar');
var btnToggle2 = document.querySelector('.togglee');
var sidebar2 = document.getElementById('sidebarr');
var btnToggle3 = document.querySelector('.toggleee');
var sidebar3 = document.getElementById('sidebarrr');

// Kapatma düğmeleri
const closeButton1 = document.getElementById('closeButton');
const closeButton2 = document.getElementById('closeButtonn');
const closeButton3 = document.getElementById('closeButtonnn');

btnToggle1.onclick = function() {
  if (!sidebar1.classList.contains('sidebarshow')) {
    sidebar1.classList.add('sidebarshow');
    btnToggle1.querySelector('span').classList.add('toggle');
    if (sidebar3.classList.contains('sidebarrrshow')) {
      sidebar3.classList.remove('sidebarrrshow');
      btnToggle3.querySelector('span').classList.remove('toggleee');
    }
  } else {
    sidebar1.classList.remove('sidebarshow');
    btnToggle1.querySelector('span').classList.remove('toggle');
  }
};

btnToggle2.onclick = function() {
  if (!sidebar2.classList.contains('sidebarrshow')) {
    sidebar2.classList.add('sidebarrshow');
    btnToggle2.querySelector('span').classList.add('togglee');
  } else {
    sidebar2.classList.remove('sidebarrshow');
    btnToggle2.querySelector('span').classList.remove('togglee');
  }
};

btnToggle3.onclick = function() {
  if (!sidebar3.classList.contains('sidebarrrshow')) {
    sidebar3.classList.add('sidebarrrshow');
    btnToggle3.querySelector('span').classList.add('toggleee');
    if (sidebar1.classList.contains('sidebarshow')) {
      sidebar1.classList.remove('sidebarshow');
      btnToggle1.querySelector('span').classList.remove('toggle');
    }
  } else {
    sidebar3.classList.remove('sidebarrrshow');
    btnToggle3.querySelector('span').classList.remove('toggleee');
  }
};

closeButton1.addEventListener('click', () => {
  sidebar1.classList.remove('sidebarshow');
  btnToggle1.querySelector('span').classList.remove('toggle');
});

closeButton2.addEventListener('click', () => {
  sidebar2.classList.remove('sidebarrshow');
  btnToggle2.querySelector('span').classList.remove('togglee');
});

closeButton3.addEventListener('click', () => {
  sidebar3.classList.remove('sidebarrrshow');
  btnToggle3.querySelector('span').classList.remove('toggleee');
});
