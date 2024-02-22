/* map and for each er moddhe difference: 
1. map kono kaj kore return kore dey array er moddhe
2. for each return kore na */

const numbers = [1,5,6,4,15];
const result = numbers.forEach( n => console.log(n)) // akhane n ta holo array er prottek ta Element
/* 1
5
6
4
15 */
console.log(result); // undefined cz for each return kore nai.. 

const players = [75, 65, 67, 72, 55, 59];
const pelected = players.map(p => p > 70) //[ true, false, false, true, false, false ]

const selected = players.filter(p => p > 50)
console.log(selected);
// [ 75, 65, 67, 72, 55, 59 ]
// filter selects elements based on a condition and return an array with the elements that fullfilled the condition 

const even = players.filter(p => p % 2 === 0)
console.log(even);
// [ 72 ]
const friends = ["udoy", "saber", "peal", "barshon", "moyeen", "ahsan", "islam"];
const oddfreinds = friends.filter(f => f.length %2 ===1);
console.log(oddfreinds);
// [ 'saber', 'barshon', 'ahsan', 'islam' ] 