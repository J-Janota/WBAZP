function swapTheme(elementId, classes) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let currentClass = element.classList.value.split(' ').find(cls => classes.includes(cls));
    let currentIndex = classes.indexOf(currentClass);

    let nextIndex = (currentIndex + 1) % classes.length;

    element.classList.remove(...classes);
    element.classList.add(classes[nextIndex]);

    localStorage.setItem('selectedTheme', classes[nextIndex]);
  }

  function applyStoredTheme(elementId, classes) {
      const element = document.getElementById(elementId);
      if (!element) return;

      const storedTheme = localStorage.getItem('selectedTheme');
      if (storedTheme) {
          if (classes.includes(storedTheme)) {
             element.classList.remove(...classes);
             element.classList.add(storedTheme);
          }
      }
  }

  window.addEventListener('load', () => applyStoredTheme('body', ['spring', 'summer', 'fall', 'winter']));

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    hamburger.classList.toggle('active');
    menu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

const themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', (event) => {
    swapTheme('body', ['spring', 'summer', 'fall', 'winter']);
})
