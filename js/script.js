import get from './getElement.js';

const btn = get('.btn');
const id = get('#id');
const content = get('.advice-content');
const URL = 'https://api.adviceslip.com/advice';

window.addEventListener('DOMContentLoaded', async function () {
  const randomID = Math.ceil(Math.random() * 100);
  const randomURL = 'https://api.adviceslip.com/advice/';
  try {
    const response = await fetch(`${randomURL}${randomID}`);
    const data = await response.json();
    displayAdvice(data);
  } catch (error) {
    console.log(error);
  }
});

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    displayAdvice(data);
  } catch (error) {
    console.log(error);
  }
});

// Display Advice in DOM
function displayAdvice(data) {
  const { id: adviceId, advice } = data.slip;
  content.innerHTML = `<p>"${advice}"</p>`;
  id.innerHTML = adviceId;
  setTimeout(function () {
    btn.classList.remove('animate');
  }, 3000);
}
