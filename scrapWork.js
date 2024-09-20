// start
// 0 => {
//   points: 4,
//   goalsFor: 7,
//   goalsAgainst: 8,
//   goalDifference: -1,
//   team: 0,
//   headToHead: { '1': 1, '2': 1, '3': 3, '4': 1, '5': 1 }
// },
// 1 => {
//   points: 7,
//   goalsFor: 7,
//   goalsAgainst: 4,
//   goalDifference: 3,
//   team: 1,
//   headToHead: { '0': 2, '2': 0, '3': 1, '4': 3, '5': 1 }
// },
// 2 => {
//   points: 7,
//   goalsFor: 7,
//   goalsAgainst: 4,
//   goalDifference: 3,
//   team: 2,
//   headToHead: { '0': 1, '1': 0, '3': 2, '4': 1, '5': 3 }
// },
// 3 => {
//   points: 4,
//   goalsFor: 7,
//   goalsAgainst: 8,
//   goalDifference: -1,
//   team: 3,
//   headToHead: { '0': 2, '1': 0, '2': 2, '4': 3, '5': 0 }
// },
// 4 => {
//   points: 4,
//   goalsFor: 7,
//   goalsAgainst: 8,
//   goalDifference: -1,
//   team: 4,
//   headToHead: { '0': 2, '1': 1, '2': 0, '3': 2, '5': 2 }
// },
// 5 => {
//   points: 4,
//   goalsFor: 4,
//   goalsAgainst: 7,
//   goalDifference: -3,
//   team: 5,
//   headToHead: { '0': 1, '1': 2, '2': 1, '3': 0, '4': 0 }
// }
[
  // after recursive sorting
  // should be teams 1, 2, 3, 4, 0, 5
  ([
    1,
    {
      points: 7,
      goalsFor: 7,
      goalsAgainst: 4,
      headToHead: [2, 0, 1, 2, 2, 0],
      goalDifference: 3,
    },
  ],
  [
    2,
    {
      points: 7,
      goalsFor: 7,
      goalsAgainst: 4,
      headToHead: [1, 1, 0, 1, 2, 2],
      goalDifference: 3,
    },
  ],
  [
    3,
    {
      points: 4,
      goalsFor: 7,
      goalsAgainst: 8,
      headToHead: [0, 0, 1, 0, 2, 1],
      goalDifference: -1,
    },
  ],
  [
    4,
    {
      points: 4,
      goalsFor: 7,
      goalsAgainst: 8,
      headToHead: [2, 0, 0, 0, 0, 2],
      goalDifference: -1,
    },
  ],
  [
    0,
    {
      points: 4,
      goalsFor: 7,
      goalsAgainst: 8,
      headToHead: [0, 0, 1, 2, 0, 1],
      goalDifference: -1,
    },
  ],
  [
    5,
    {
      points: 4,
      goalsFor: 4,
      goalsAgainst: 7,
      headToHead: [1, 2, 0, 1, 0, 0],
      goalDifference: -3,
    },
  ]),
];

// what the final sorts is instead
// sortedTeams Map(6) {
//   1 => {
//     points: 7,
//     goalsFor: 7,
//     goalsAgainst: 4,
//     goalDifference: 3,
//     team: 1,
//     headToHead: { '0': 2, '2': 0, '3': 1, '4': 3, '5': 1 }
//   },
//   2 => {
//     points: 7,
//     goalsFor: 7,
//     goalsAgainst: 4,
//     goalDifference: 3,
//     team: 2,
//     headToHead: { '0': 1, '1': 0, '3': 2, '4': 1, '5': 3 }
//   },
//   4 => {
//     points: 4,
//     goalsFor: 7,
//     goalsAgainst: 8,
//     goalDifference: -1,
//     team: 4,
//     headToHead: { '0': 2, '1': 1, '2': 0, '3': 2, '5': 2 }
//   },
//   3 => {
//     points: 4,
//     goalsFor: 7,
//     goalsAgainst: 8,
//     goalDifference: -1,
//     team: 3,
//     headToHead: { '0': 2, '1': 0, '2': 2, '4': 3, '5': 0 }
//   },
//   0 => {
//     points: 4,
//     goalsFor: 7,
//     goalsAgainst: 8,
//     goalDifference: -1,
//     team: 0,
//     headToHead: { '1': 1, '2': 1, '3': 3, '4': 1, '5': 1 }
//   },
//   5 => {
//     points: 4,
//     goalsFor: 4,
//     goalsAgainst: 7,
//     goalDifference: -3,
//     team: 5,
//     headToHead: { '0': 1, '1': 2, '2': 1, '3': 0, '4': 0 }
//   }
// }
