const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode
// function darkMode() {
//   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//   textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';

//   toggleIcon.children[0].textContent = 'Dark Mode';
//   toggleIcon.children[1].classList.remove('fa-sun');
//   toggleIcon.children[1].classList.add('fa-moon');

//   image1.src = 'img/undraw_proud_coder_dark.svg';
//   image2.src = 'img/undraw_feeling_proud_dark.svg';
//   image3.src = 'img/undraw_conceptual_idea_dark.svg';
// }
// function lightMode() {
//   nav.style.backgroundColor = 'rgb(255 255 255 / 50%';
//   textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';

//   toggleIcon.children[0].textContent = 'Light Mode';
//   toggleIcon.children[1].classList.remove('fa-moon');
//   toggleIcon.children[1].classList.add('fa-sun');

//   image1.src = 'img/undraw_proud_coder_light.svg';
//   image2.src = 'img/undraw_feeling_proud_light.svg';
//   image3.src = 'img/undraw_conceptual_idea_light.svg';
// }

// Single change mode function
function changeMode(mode) {
  nav.style.backgroundColor =
    mode === 'light' ? 'rgb(255 255 255 / 50%' : 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor =
    mode === 'light' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%';

  toggleIcon.children[0].textContent =
    mode === 'light' ? 'Light Mode' : 'Dark Mode';

  toggleIcon.children[1].classList.remove(
    mode === 'light' ? 'fa-moon' : 'fa-sun'
  );
  toggleIcon.children[1].classList.add(mode === 'light' ? 'fa-sun' : 'fa-moon');

  image1.src = `img/undraw_proud_coder_${
    mode === 'light' ? 'light' : 'dark'
  }.svg`;
  image2.src = `img/undraw_feeling_proud_${
    mode === 'light' ? 'light' : 'dark'
  }.svg`;
  image3.src = `img/undraw_conceptual_idea_${
    mode === 'light' ? 'light' : 'dark'
  }.svg`;
}

// Switch Theme
const switchTheme = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    // darkMode();
    changeMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    // lightMode();
    changeMode('light');
  }
};

// addEventListener
toggleSwitch.addEventListener('change', switchTheme);
