import get from './getElement.js';

const btn = get('.btn');
const id = get('#id');
const content = get('.advice-content');
const URL = 'https://api.adviceslip.com/advice';

btn.addEventListener('click', displayAdvice);
window.addEventListener('DOMContentLoaded', displayAdvice);

const fetchAdvice = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Display Advice in DOM
async function displayAdvice() {
  const data = await fetchAdvice();
  const { id: adviceId, advice } = data.slip;
  content.innerHTML = `<p>"${advice}"</p>`;
  id.innerHTML = adviceId;
}
