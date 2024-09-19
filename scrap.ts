import test from "node:test"

type gameType = number[]

type teamType = {
  points: number,
  goalsFor: number,
  goalsAgainst: number,
  // team: number,
  goalDifference: number
  headToHead: number[]
}

const processGames = (number: number, games: gameType[]) => {
  // Initialize teams with points, goalsFor, goalsAgainst in hashmap
  let map = new Map<number, teamType>();
  games.forEach(([teamA, teamB, goalsA, goalsB]) => {
      if (!map.has(teamA)) {
        map.set(teamA, {points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, headToHead: Array(number).fill(0)})
      }
      if (!map.has(teamB)) {
        map.set(teamB, {points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, headToHead: Array(number).fill(0)})
      }
      map.get(teamA).goalsFor += goalsA;
      map.get(teamA).goalsAgainst += goalsB;
      map.get(teamB).goalsFor += goalsB;
      map.get(teamB).goalsAgainst += goalsA;


      if (goalsA > goalsB) {
        map.get(teamA).points += 2; // Team A wins
        map.get(teamA).headToHead[teamB] += 2;
      } else if (goalsA < goalsB) {
        map.get(teamB).points += 2; // Team B wins
        map.get(teamB).headToHead[teamA] += 2;
      } else {
        map.get(teamA).points += 1; // Draw
        map.get(teamB).points += 1; // Draw
        map.get(teamA).headToHead[teamB] += 1;
        map.get(teamB).headToHead[teamA] += 1;
      }

      map.get(teamA).goalDifference = map.get(teamA).goalsFor - map.get(teamA).goalsAgainst;
      map.get(teamB).goalDifference = map.get(teamB).goalsFor - map.get(teamB).goalsAgainst;
  });
  // console.log([...map.entries()])
  return map;
}

const sortAllTeams = (map: Map<number, teamType>) => {
  // recursive function to sort the teams
  if ("baseCase") return;


  // sortAllTeams("recursiveCase");
}



export function computeRanks(number: number, games: gameType[]) {
  // Initialize teams with points, goalsFor, goalsAgainst in hashmap
    const processAllGames = processGames(number, games);
  // Sort teams based on points, goal difference, goals for, and original index
  const sortTeams = sortAllTeams(processAllGames);

  // Assign ranks based on the sorted order

  // console.log(teams)
  return;
}