// showScores.innerHTML = '';

const displayScores = (results) => {
  const showScores = document.querySelector('.score-board');
  showScores.innerHTML = '';
  let displayedResult;
  if (results) {
    displayedResult = results;
  } else {
    displayedResult = [];
  }
  displayedResult.forEach((result) => {
    showScores.innerHTML += `<li>${result.user} : ${result.score}</li>`;
  });
};

export default displayScores;
