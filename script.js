let turn = 'X';
let board = ['','','','','','','','',''];
const winCombos = [  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function checkWin() {
  for(let i=0; i<winCombos.length; i++) {
    let [a,b,c] = winCombos[i];
    if(board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function reset() {
  board = ['','','','','','','','',''];
  turn = 'X';
  document.querySelectorAll('td').forEach(td => td.innerHTML = '');
}

function handleClick(e) {
  const index = e.target.id;
  if(board[index] === '') {
    board[index] = turn;
    e.target.classList.add(turn);
    e.target.innerHTML = turn;
    const winner = checkWin();
    if(winner) {
      alert(`${winner} wins!`);
      reset();
    } else if(board.every(cell => cell !== '')) {
      alert(`It's a tie!`);
      reset();
    } else {
      turn = turn === 'X' ? 'O' : 'X';
    }
  }
}

document.querySelectorAll('td').forEach(td => td.addEventListener('click', handleClick));
document.getElementById('reset').addEventListener('click', reset);
