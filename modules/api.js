import displayScores from './displayScores.js';

const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// SET THE GAME
export const setGame = async () => {
  const response = await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify({ name: 'Checkers' }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const game = await response.json();
  return game;
};

// SET SCORE
export const setScore = async (info) => {
  const response = await fetch(`${gameUrl}JhlASyd7O10SFGxwjlBa/scores/`, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const score = await response.json();
  return score;
};

// GET SCORE
export const getScore = async () => {
  const response = await fetch(`${gameUrl}JhlASyd7O10SFGxwjlBa/scores/`);
  const results = await response.json();
  localStorage.setItem('players', JSON.stringify(results.result));
  displayScores(JSON.parse(localStorage.getItem('players')));
};
