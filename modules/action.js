const boardRight = document.querySelector('.board-right');

boardRight.innerHTML = `<h3>Add your score</h3>
          <input type="text" placeholder="Your name" class='name-input' />
          <input type="text" placeholder="Your Score" class = 'score-input' />
          <button class='btn-submit'>Submit</button>
        </div>`;

export default boardRight;
