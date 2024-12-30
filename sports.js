const processGames = (number, games) => {
  let map = new Map();
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
    let teamAStats = map.get(teamA);
    let teamBStats = map.get(teamB);

    teamAStats.goalsFor += goalsA;
    teamAStats.goalsAgainst += goalsB;
    teamBStats.goalsFor += goalsB;
    teamBStats.goalsAgainst += goalsA;

    // Points assignment
    if (goalsA > goalsB) {
      teamAStats.points += 2; // Team A wins
    } else if (goalsA < goalsB) {
      teamBStats.points += 2; // Team B wins
    } else {
      teamAStats.points += 1; // Draw
      teamBStats.points += 1; // Draw
    }

    teamAStats.goalDifference = teamAStats.goalsFor - teamAStats.goalsAgainst;
    teamBStats.goalDifference = teamBStats.goalsFor - teamBStats.goalsAgainst;

    // Record head-to-head data
    if (!teamAStats.headToHead[teamB]) {
      teamAStats.headToHead[teamB] = {
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0,
      };
    }
    if (!teamBStats.headToHead[teamA]) {
      teamBStats.headToHead[teamA] = {
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0,
      };
    }

    // Update head-to-head stats
    teamAStats.headToHead[teamB].goalsFor += goalsA;
    teamAStats.headToHead[teamB].goalsAgainst += goalsB;
    teamBStats.headToHead[teamA].goalsFor += goalsB;
    teamBStats.headToHead[teamA].goalsAgainst += goalsA;

    if (goalsA > goalsB) {
      teamAStats.headToHead[teamB].points += 2;
    } else if (goalsA < goalsB) {
      teamBStats.headToHead[teamA].points += 2;
    } else {
      teamAStats.headToHead[teamB].points += 1;
      teamBStats.headToHead[teamA].points += 1;
    }
  });

  return map;
};

const sortTeams = (teams) => {
  return [...teams.entries()].sort((a, b) => {
    // Primary sorting by points
    if (a[1].points !== b[1].points) {
      return b[1].points - a[1].points;
    }
    // Secondary sorting by goal difference
    if (a[1].goalDifference !== b[1].goalDifference) {
      return b[1].goalDifference - a[1].goalDifference;
    }
    // Third criterion: goals scored
    if (a[1].goalsFor !== b[1].goalsFor) {
      return b[1].goalsFor - a[1].goalsFor;
    }
    return 0; // Teams are completely tied
  });
};

// Function to handle tied teams using head-to-head comparison
const resolveTies = (sortedTeams, startIndex, endIndex) => {
  if (endIndex - startIndex <= 1) return; // No ties to resolve

  const tiedTeams = sortedTeams.slice(startIndex, endIndex);
  const headToHeadMap = new Map(
    tiedTeams.map(([teamId, stats]) => {
      const combinedStats = tiedTeams.reduce(
        (acc, [otherTeamId, otherStats]) => {
          if (teamId !== otherTeamId) {
            const h2h = stats.headToHead[otherTeamId] || {
              points: 0,
              goalsFor: 0,
              goalsAgainst: 0,
            };
            acc.points += h2h.points;
            acc.goalsFor += h2h.goalsFor;
            acc.goalsAgainst += h2h.goalsAgainst;
          }
          return acc;
        },
        { points: 0, goalsFor: 0, goalsAgainst: 0 }
      );
      return [teamId, { ...stats, ...combinedStats }];
    })
  );

  const sorted = sortTeams(headToHeadMap);
  sortedTeams.splice(startIndex, endIndex - startIndex, ...sorted);
};

function computeRanks(number, games) {
  const processAllGames = processGames(number, games);
  let sortedTeams = sortTeams(processAllGames);

  let ranks = Array(number).fill(0);
  let currentRank = 1;

  for (let i = 0; i < sortedTeams.length; i++) {
    if (i > 0) {
      const prevTeam = sortedTeams[i - 1][1];
      const currTeam = sortedTeams[i][1];

      if (
        currTeam.points !== prevTeam.points ||
        currTeam.goalDifference !== prevTeam.goalDifference ||
        currTeam.goalsFor !== prevTeam.goalsFor
      ) {
        currentRank = i + 1;
      }
    }
    ranks[sortedTeams[i][1].team] = currentRank;

    // Check for ties
    if (
      i > 0 &&
      ranks[sortedTeams[i][1].team] === ranks[sortedTeams[i - 1][1].team]
    ) {
      let start = i - 1;
      while (
        start >= 0 &&
        ranks[sortedTeams[start][1].team] === currentRank &&
        start > 0
      ) {
        start--;
      }
      resolveTies(sortedTeams, start + 1, i + 1);
    }
  }

  return ranks;
}

// tests
const testComputeRanks = () => {
  const compareResults = (description, actual, expected) => {
    const result = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(
      `${description}: ${
        result ? "PASSED" : "FAILED"
      }\nExpected: ${JSON.stringify(expected)}\nActual: ${JSON.stringify(
        actual
      )}\n`
    );
  };

  // Test case 1: Example 1
  compareResults(
    "Example 1",
    computeRanks(6, [
      [0, 5, 1, 1],
      [1, 4, 3, 1],
      [2, 3, 2, 2],
      [1, 5, 1, 2],
      [2, 0, 1, 1],
      [3, 4, 3, 2],
      [2, 5, 3, 1],
      [3, 1, 0, 1],
      [4, 0, 2, 1],
      [3, 5, 0, 0],
      [4, 2, 0, 1],
      [0, 1, 1, 2],
      [4, 5, 2, 0],
      [0, 3, 3, 2],
      [1, 2, 0, 0],
    ]),
    [5, 1, 1, 3, 4, 6]
  );

  // Test case 2: Example 2
  compareResults(
    "Example 2",
    computeRanks(6, [
      [0, 5, 1, 2],
      [1, 4, 0, 3],
      [2, 3, 2, 1],
      [1, 5, 1, 0],
      [2, 0, 2, 2],
      [3, 4, 3, 0],
      [2, 5, 3, 0],
      [3, 1, 0, 2],
      [4, 0, 1, 3],
    ]),
    [3, 2, 1, 4, 5, 6]
  );

  // Test case 3: Example 3
  compareResults(
    "Example 3",
    computeRanks(4, [
      [0, 3, 2, 1],
      [1, 2, 3, 0],
      [1, 3, 2, 0],
      [2, 0, 2, 0],
      [0, 1, 0, 1],
      [2, 3, 0, 1],
    ]),
    [4, 1, 2, 3]
  );

  // Test case 4: Example Empty
  compareResults(
    "Example Empty",
    computeRanks(10, []),
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  );

  // Test case 5: Example One Game
  compareResults(
    "Example One Game",
    computeRanks(8, [[0, 7, 2, 0]]),
    [1, 2, 2, 2, 2, 2, 2, 8]
  );

  // Test case 6: Example Crazy
  compareResults(
    "Example Crazy",
    computeRanks(8, [
      [0, 7, 0, 0],
      [1, 6, 2, 2],
      [2, 5, 0, 0],
      [3, 4, 0, 0],
      [1, 7, 0, 0],
      [2, 0, 0, 0],
      [3, 6, 0, 0],
      [4, 5, 0, 0],
      [2, 7, 2, 2],
      [3, 1, 0, 0],
      [4, 0, 0, 0],
      [5, 6, 0, 0],
      [3, 7, 0, 0],
      [4, 2, 0, 0],
      [5, 1, 1, 1],
      [6, 0, 0, 0],
      [4, 7, 2, 2],
      [5, 3, 1, 3],
      [6, 2, 0, 0],
      [0, 1, 1, 1],
      [5, 7, 0, 0],
      [6, 4, 2, 2],
      [0, 3, 3, 1],
      [1, 2, 0, 0],
      [6, 7, 0, 0],
      [0, 5, 0, 2],
      [1, 4, 0, 0],
      [2, 3, 0, 0],
    ]),
    [3, 4, 8, 1, 6, 2, 5, 7]
  );
};

testComputeRanks();
