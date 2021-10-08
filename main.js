const team = {
  _players: [
    { firstName: "Messi", lastName: "Lionel", age: 34 },
    { firstName: "Salah", lastName: "Mohammed", age: 29 },
    { firstName: "Mbappé", lastName: "Kylian", age: 22 }
  ],
  _games: [
    { opponent: "Barcelona FC", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Chelsea", teamPoints: 23, opponentPoints: 20 },
    { opponent: "Borussia Dortmund", teamPoints: 15, opponentPoints: 18 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints
    }
    this.games.push(game);
  }
}

team.addPlayer("Neymar", "Junior", 29);
team.addPlayer("Sadio", "Mané", 29);
team.addPlayer("Robert", "Lewandowski", 33);

console.log(team.players);

team.addGame("Ajax", 100, 50);
team.addGame("ManCity", 56, 90);
team.addGame("Bayern", 30, 47);

console.log(team.games);
