// O(n) - Time | O(n) - Space
function tournamentWinner(competitions, results) {
  let hash = {};
  let team;
  let highestScore = 0;
  let winner;
  for(let i = 0; i < competitions.length; i++){
    if(results[i] === 0){
      team = competitions[i][1];
    } else {
      team = competitions[i][0]
    }

    if(team in hash){
      hash[team] += 3;
    } else {
      hash[team] = 3;
    }
  }

  for(let score in hash){
    if(hash[score] > highestScore) {
      highestScore = hash[score];
      winner = score;
    }
  }

  return winner;
}
tournamentWinner(
  [
    ['HTML', 'C#'], 
    ['C#', 'Python'], 
    ['Python', 'HTML']
  ], [0,0,1]
) 
// 'python'

// competitions  = [homeTeam, awayTeam]
// 1 in results = homeTeam team
// 0 in results = awayTeam team