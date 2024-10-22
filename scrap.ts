type TeamStats = {
  id: number;
  score: number;
  goals: number;
  diff: number;
  headToHead: Map<number, number>; // Store head-to-head points against each team
};

export function computeRanks(number: number, games: number[][]): number[] {
  // Step 1: Initialize team statistics
  const teams: TeamStats[] = Array.from({ length: number }, (_, id) => ({
    id,
    score: 0,
    goals: 0,
    diff: 0,
    headToHead: new Map<number, number>(), // Initialize head-to-head results
  }));

  // Step 2: Process each game
  games.forEach(([a, b, x, y]) => {
    // Update goals and goal difference for each team
    teams[a].goals += x;
    teams[b].goals += y;
    teams[a].diff += x - y;
    teams[b].diff += y - x;

    // Update head-to-head results
    if (!teams[a].headToHead.has(b)) {
      teams[a].headToHead.set(b, 0);
    }
    if (!teams[b].headToHead.has(a)) {
      teams[b].headToHead.set(a, 0);
    }

    if (x === y) {
      teams[a].score += 1; // Draw
      teams[b].score += 1; // Draw
      teams[a].headToHead.set(b, teams[a].headToHead.get(b)! + 1); // Each gets 1 point in head-to-head
      teams[b].headToHead.set(a, teams[b].headToHead.get(a)! + 1); // Each gets 1 point in head-to-head
    } else {
      const winner = x > y ? a : b;
      const loser = x > y ? b : a;
      teams[winner].score += 2; // Winner gets 2 points
      teams[winner].headToHead.set(
        loser,
        teams[winner].headToHead.get(loser)! + 2
      ); // Winner gets 2 points in head-to-head
    }
  });

  // Step 3: Sort teams based on score, goal difference, and goals scored
  const cmp = (teamA: TeamStats, teamB: TeamStats) => {
    return (
      teamB.score - teamA.score || // Sort by score
      teamB.diff - teamA.diff || // Sort by goal difference
      teamB.goals - teamA.goals // Sort by goals scored
    );
  };

  // Sort teams using the comparator
  teams.sort(cmp);

  // Step 4: Handle ties with head-to-head results
  const ranks = Array(number).fill(0);
  let currentRank = 1;

  for (let i = 0; i < teams.length; i++) {
    const currentTeam = teams[i];

    // Check for ties
    if (i > 0 && cmp(currentTeam, teams[i - 1]) === 0) {
      // If tied, gather all tied teams
      const tiedTeams: number[] = [currentTeam.id];
      let j = i + 1;

      // Gather all tied teams
      while (j < teams.length && cmp(currentTeam, teams[j]) === 0) {
        tiedTeams.push(teams[j].id);
        j++;
      }

      // Step 5: Evaluate head-to-head results for tied teams
      const headToHeadResults = tiedTeams.map((teamId) => {
        const team = teams[teamId];
        const totalPoints = Array.from(team.headToHead.values()).reduce(
          (total, points) => total + points,
          0
        );
        return { id: teamId, score: totalPoints };
      });

      // Sort head-to-head results
      headToHeadResults.sort((a, b) => b.score - a.score);

      // Assign ranks based on head-to-head results
      headToHeadResults.forEach((team, rankIndex) => {
        ranks[team.id] = currentRank; // Assign same rank for tied teams
      });

      // Move the index to the next group of teams
      i = j - 1; // Update i to skip over the tied teams
      currentRank++; // Increase rank for the next team
    } else {
      ranks[currentTeam.id] = currentRank; // Assign rank to non-tied team
      currentRank++; // Move to the next rank
    }
  }

  return ranks;
}
