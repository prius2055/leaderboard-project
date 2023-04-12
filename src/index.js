import './styles.css';
import boardRight from '../modules/action.js';
import { getScore, setScore } from '../modules/api.js';

const refreshBtn = document.querySelector('.btn-refresh');
const board = document.querySelector('.board');

board.appendChild(boardRight);

getScore();

const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const submitBtn = document.querySelector('.btn-submit');

submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const score = +scoreInput.value;
  const info = { user: name, score };
  setScore(info);
  nameInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', () => {
  getScore();
});
