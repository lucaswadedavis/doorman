(function(){
  
  var TicTacToe = function () {
    this.board = '000000000';
    this.winner = null;
    this.winningStates = '012,345,678,036,147,258,048,642';

    this.takeCell = function (row, column, player) {
      player = player || 'x';
      var index = coordsToIndex(row, column);
      this.board = this.board.substring(0, index) + player + this.board.substring(index + 1);
    };
    
    this.getValueAtPosition = function (row, column) {
      var index = coordsToIndex(row, column);
      return this.board.substring(index, index + 1);
    };

    this.gameOver = function () {
      if (this.checkBoardForWinner('x')) {
        this.winner = 'x';
      } else if (this.checkBoardForWinner('o')) {
        this.winner = 'o';
      }
    };

    this.play = function (player) {
      var winningStates = this.winningStates.split(',');
      
      for (var i = 0; i < winningStates.length; i++) {
        var state = this.checkTriplet(winningStates[i]);
        if (state[player] === 2 && state.emptyCells[0]) {
          var coords = indexToCoords(state.emptyCells[0])
          this.takeCell(coords.row, coords.column, player);
          return;
        } else if (state[opponent] === 2 && state.emptyCells[0]) {
          var coords = indexToCoords(state.emptyCells[0])
          this.takeCell(coords.row, coords.column, player);
          return;
        } 
      }

      if (this.getValueAtPosition(1, 1) === '0') {
          this.takeCell(1, 1, player);
          return;
        } else if (this.getValueAtPosition(0, 0) === '0') {
          this.takeCell(0, 0, player);
          return;
        } else if (this.getValueAtPosition(0, 2) === '0') {
          this.takeCell(0, 2, player);
          return;
        } else if (this.getValueAtPosition(2, 0) === '0') {
          this.takeCell(2, 0, player);
          return;
        } else if (this.getValueAtPosition(2, 2) === '0') {
          this.takeCell(2, 2, player);
          return;
        }

      for (var i = 0; i < this.board.length; i++) {
        if (this.board[i] === '0') {
          var coords = indexToCoords(i);
          this.takeCell(coords.row, coords.column, player);
          return;
        }
      }

    };

    this.checkTriplet = function (triplet) {
      var res = {x: 0, o: 0, emptyCells: []};
      for (var i = 0; i < triplet.length; i++) {
        if (this.board[parseInt(triplet[i], 10)] === '0') {
          res.emptyCells.push(triplet[i]);
        } else if (this.board[parseInt(triplet[i], 10)] === 'x') {
          res['x'] ++;
        } else {
          res['o'] ++;
        }
      }
      return res;
    };

    this.checkBoardForWinner = function (player) {
      var winningStates = this.winningStates.split(',');
      for (var i = 0; i < winningStates.length; i++) {
        if (this.checkTriplet(winningStates[i])[player] === 3) {
          return true;
        }
      }
      return false;
    };

    function coordsToIndex (row, column) {
      return 3 * row + column;
    };

    function indexToCoords (index) {
      return {row: Math.floor(index / 3), column: index % 3};
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
