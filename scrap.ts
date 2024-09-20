type gameType = number[];

type teamType = {
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  team: number;
  headToHead: { [key: number]: number };
};

const processGames = (
  number: number,
  games: gameType[]
): Map<number, teamType> => {
  let map = new Map<number, teamType>();
  for (let i = 0; i < number; i++) {
    map.set(i, {
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      team: i,
      headToHead: {},
    });
  }
  games.forEach(([teamA, teamB, goalsA, goalsB]) => {
    map.get(teamA).goalsFor += goalsA;
    map.get(teamA).goalsAgainst += goalsB;
    map.get(teamB).goalsFor += goalsB;
    map.get(teamB).goalsAgainst += goalsA;

    if (goalsA > goalsB) {
      map.get(teamA).points += 2; // Team A wins
    } else if (goalsA < goalsB) {
      map.get(teamB).points += 2; // Team B wins
    } else {
      map.get(teamA).points += 1; // Draw
      map.get(teamB).points += 1; // Draw
    }

    map.get(teamA).goalDifference =
      map.get(teamA).goalsFor - map.get(teamA).goalsAgainst;
    map.get(teamB).goalDifference =
      map.get(teamB).goalsFor - map.get(teamB).goalsAgainst;

    if (!map.get(teamA).headToHead[teamB]) {
      map.get(teamA).headToHead[teamB] = 0;
    }
    if (!map.get(teamB).headToHead[teamA]) {
      map.get(teamB).headToHead[teamA] = 0;
    }
    map.get(teamA).headToHead[teamB] += goalsA;
    map.get(teamB).headToHead[teamA] += goalsB;
  });

  return map;
};

const sortAllTeams = (teams: Map<number, teamType>): Map<number, teamType> => {
  // if (teams.size <= 1) {
  //   return teams;
  // }

  const sortedTeams = new Map<number, teamType>(
    [...teams.entries()].sort((a, b) => {
      if (a[1].points !== b[1].points) {
        return b[1].points - a[1].points;
      }
      if (a[1].goalDifference !== b[1].goalDifference) {
        return b[1].goalDifference - a[1].goalDifference;
      }
      if (a[1].goalsFor !== b[1].goalsFor) {
        return b[1].goalsFor - a[1].goalsFor;
      }
      if (a[1].headToHead[b[0]] !== b[1].headToHead[a[0]]) {
        return b[1].headToHead[a[0]] - a[1].headToHead[b[0]];
      }
      return 0;
    })
  );

  // need to sort by team head-to-head and make sure its sorted correctly for 1st example [5, 1, 1, 3, 4, 6] second example [4, 1, 2, 3]

  return sortedTeams;
};

export function computeRanks(number: number, games: gameType[]) {
  // Process games to update teams' statistics
  const processAllGames = processGames(number, games);
  // console.log("processAllGames", processAllGames);

  // Sort teams based on points, goal difference, goals for, and head-to-head
  const sortedTeams = sortAllTeams(processAllGames);
  console.log("sortedTeams", sortedTeams);

  // Assign ranks based on the sorted order
  let ranks = Array(number).fill(0);
  let currentRank = 1;
  const teamsArray = Array.from(sortedTeams.values());

  for (let i = 0; i < teamsArray.length; i++) {
    if (
      i > 0 &&
      (teamsArray[i].points !== teamsArray[i - 1].points ||
        teamsArray[i].goalDifference !== teamsArray[i - 1].goalDifference ||
        teamsArray[i].goalsFor !== teamsArray[i - 1].goalsFor ||
        teamsArray[i].headToHead[teamsArray[i - 1].team] !==
          teamsArray[i - 1].headToHead[teamsArray[i].team])
    ) {
      currentRank = i + 1;
    }
    ranks[teamsArray[i].team] = currentRank;
  }

  console.log("ranks", ranks);
  return ranks;
}
