const processGames = (number: number, games) => {
  let teams = Array(number)
    .fill(null, 0, number)
    .map((_, i) => ({
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      headToHead: Array(number).fill(0), // Track head-to-head points
      index: i,
      goalDifference: 0,
    }));
  // Process each game
  games.forEach(([teamA, teamB, goalsA, goalsB]) => {
    teams[teamA].goalsFor += goalsA;
    teams[teamA].goalsAgainst += goalsB;
    teams[teamB].goalsFor += goalsB;
    teams[teamB].goalsAgainst += goalsA;

    if (goalsA > goalsB) {
      teams[teamA].points += 2; // Team A wins
      teams[teamA].headToHead[teamB] += 2;
    } else if (goalsA < goalsB) {
      teams[teamB].points += 2; // Team B wins
      teams[teamB].headToHead[teamA] += 2;
    } else {
      teams[teamA].points += 1; // Draw
      teams[teamB].points += 1; // Draw
      teams[teamA].headToHead[teamB] += 1;
      teams[teamB].headToHead[teamA] += 1;
    }
  });

  // Compute goal differences
  teams.forEach((team) => {
    team.goalDifference = team.goalsFor - team.goalsAgainst;
  });
  return teams;
};

const sortBYStats = (teams) => {
  return teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference)
      return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
  });
};

const sortHeadToHead = (teams) => {
  for (let i = 0; i < teams.length - 1; i++) {
    console.log(teams[i], teams[i + 1]);
    for (let j = i + 1; j < teams.length; j++) {
      if (
        teams[i].points === teams[j].points &&
        teams[i].goalDifference === teams[j].goalDifference &&
        teams[i].goalsFor === teams[j].goalsFor
      ) {
        if (
          teams[i].headToHead[teams[j].index] <
          teams[j].headToHead[teams[i].index]
        ) {
          [teams[i], teams[j]] = [teams[j], teams[i]];
        }
      }
    }
  }
  // console.log(teams)
  return teams;
};

const assignRanks = (number: number, teams) => {
  let ranks = Array(number).fill(0);
  let currentRank = 1;

  for (let i = 0; i < teams.length; i++) {
    if (
      i > 0 &&
      (teams[i].points !== teams[i - 1].points ||
        teams[i].goalDifference !== teams[i - 1].goalDifference ||
        teams[i].goalsFor !== teams[i - 1].goalsFor ||
        teams[i].headToHead[teams[i - 1].index] !==
          teams[i - 1].headToHead[teams[i].index])
    ) {
      currentRank = i + 1;
    }
    ranks[teams[i].index] = currentRank;
  }
  return ranks;
};

export function computeRanks(number: number, games) {
  // Initialize teams with points, goalsFor, goalsAgainst, and head-to-head point
  const teams = processGames(number, games);
  // Sort teams based on points, goal difference, goals for, and original index
  sortBYStats(teams);
  // Handle head-to-head results for teams with identical stats
  sortHeadToHead(teams);
  sortHeadToHead(teams);
  // Assign ranks based on the sorted order
  const ranks = assignRanks(number, teams);
  // console.log(teams)
  return ranks;
}
