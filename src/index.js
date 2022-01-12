import './styles/main.scss';

const myName = document.getElementsByName('my_name');
const vacancy = document.getElementsByName('vacancy');
const allText = document.getElementsByName('root');

//click on name or vacancy to invisible or visible item
const invisible = (event) => {
    event.target.classList.toggle('hidden');
}

//press space to hidden or show text
const textDel = (event) => {
    event.keyCode == '32' ? allText[0].classList.toggle('hidden') : null
}

myName[0].addEventListener('click', (event) => invisible(event));
vacancy[0].addEventListener('click', (event) => invisible(event));

document.addEventListener('keydown', (event) => textDel(event));

