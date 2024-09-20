import { a } from "vitest/dist/chunks/suite.CcK46U-P.js";

type Point = {
  team: string;
  quantity: number;
};

const allPointsDuringGame: Point[] = [
  {
    team: "Cheese Doodles",
    quantity: 1,
  },
  {
    team: "Brown Socks",
    quantity: 3,
  },
  {
    team: "Cheese Doodles",
    quantity: 2,
  },
  {
    team: "Slopers",
    quantity: 1,
  },
  {
    team: "Slopers",
    quantity: 5,
  },
];

const pointsMap = new Map<string, number>();

allPointsDuringGame.forEach(({ team, quantity }) => {
  const currentPoints = pointsMap.get(team) ?? 0;
  pointsMap.set(team, currentPoints + quantity);
  // if (pointsMap.has(team)) {
  //   pointsMap.set(team, pointsMap.get(team) + quantity ?? 0);
  // } else {
  //   pointsMap.set(team, quantity);
  // }
});

const maxBy = (map: Map<string, number>) => {
  let max = 0;
  let team = "";
  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      team = key;
    }
  }
  return team;
};

console.log(maxBy(pointsMap));

// Find the team with the most points using a map
