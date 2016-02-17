(function(){
  
  var TicTacToe = function () {
   this.board = [[0,0,0],[0,0,0],[0,0,0]];
   this.winner = null;

   this.winningStates = [];
   this.winningStates.push([[0,0],[1,1],[2,2]]);
   this.winningStates.push([[2,0],[1,1],[0,2]]);
   for (var row=0, col=0; row<3; row++){
     this.winningStates.push([[row,0],[row,1],[row,2]]);
     this.winningStates.push([[0,col],[1,col],[2,col]]);
   }

   this.play = function (player) {
    player = player || 'x';
    var x, o, emptyCells, row, col;
    // check for player wins and take the cell
    for (var i=0;i<this.winningStates.length;i++){
      x = 0;
      o = 0;
      emptyCells = [];
      for (var j=0;j<this.winningStates[i].length;j++){
        row = this.winningStates[i][j][0];
        col = this.winningStates[j][j][1];
        if (this.board[row][col] === 'x') {
          x++;
        } else if (this.board[row][col] === 'o') {
          o++;
        } else {
          emptyCells.push([row, col]);
        }
      }
      if (player === 'x' && x === 2 && emptyCells[0]) {
        this.takeCell(emptyCells[0][0], emptyCells[0][1]);
        return;
      } else if (player === 'o' && o === 2 && emptyCells[0]) {
        this.takeCell(emptyCells[0][0], emptyCells[0][1], player);
        return;
      } else if (player === 'x' && o === 2 && emptyCells[0]) {
        this.takeCell(emptyCells[0][0], emptyCells[0][1], player);
        return;
      } else if (player === 'o' && x === 2 && emptyCells[0]) {
        this.takeCell(emptyCells[0][0], emptyCells[0][1], player);
        return;
      } else if (this.board[1][1] === 0) {
        this.takeCell(1, 1, player);
        return;
      } else if (this.board[0][0] === 0) {
        this.takeCell(0, 0, player);
        return;
      } else if (this.board[0][2] === 0) {
        this.takeCell(0, 2, player);
        return;
      } else if (this.board[2][0] === 0) {
        this.takeCell(2, 0, player);
        return;
      } else if (this.board[2][2] === 0) {
        this.takeCell(2, 2, player);
        return;
      }
    }
    
    emptyCells = [];
    for (var row=0;row<this.board.length;row++){
      for (var col=0;col<this.board[row].length;col++){
        if (!this.board[row][col]) {
          this.takeCell(row, col, player);
          return;
        }
      }
    }

    this.gameOver();

   };

   this.gameOver = function () {
    //check for x wins
    var x, o, emptyCells, row, col;
    
    for (var i=0;i<this.winningStates.length;i++) {
      x = 0;
      o = 0;
      for (var j=0;j<this.winningStates[i].length;j++) {
        row = this.winningStates[i][j][0];
        col = this.winningStates[i][j][1];
        if (this.board[row][col] === 'x') {
          x++;
        } else if (this.board[row][col] === 'o') {
          o++;
        }
      }
      if (x === 3) {
        this.winner = 'x';
        return;
      } else if (o === 3) {
        this.winner = 'o';
        return;
      }
    }

    //check for draws
    emptyCells = 9;
    for (var row=0;row<this.board.length;row++) {
      for (var col=0;col<this.board[row].length;col++) {
        if (this.board[row][col]) {
          emptyCells--;
        }
      }
    }
    if (emptyCells === 0) {
      this.winner = 'draw';
      return;
    }
   };

   this.takeCell = function (row, column, player) {
    player = player || 'x';
    // check that cell is unoccupied
    // take the Cell
    this.board[row][column] = player;
  };
  };
  var root = this;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = TicTacToe;
    }
    exports.TicTacToe = TicTacToe;
  } else {
    root.TicTacToe = TicTacToe;
  }

})();
