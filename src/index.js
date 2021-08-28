
import data from './menu.json'
import template from './templates/template.hbs'



// Разметка_______________________________________

const list = document.querySelector(".js-menu");
const markup = template(data);
list.insertAdjacentHTML('afterbegin', markup);

// Смена темы________________________________________

const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


body.classList.add(localStorage.getItem('Theme'));

if (body.classList.contains('dark-theme')) {
    checkbox.setAttribute('checked', 'true');
}

else if (body.classList.contains('light-theme')) {
    checkbox.removeAttribute('checked');
}
    
    
checkbox.addEventListener('change', themeColorChanger)

function themeColorChanger() {

    if (body.classList.contains('light-theme')) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', 'dark-theme');
        return;
    }

    if (body.classList.contains('dark-theme')) {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('Theme', 'light-theme')
        return;
    };
}








