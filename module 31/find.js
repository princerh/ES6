// akadhik jon condtion fullfil korleo akjon k dibe    find()
const players = [75, 65, 67, 72, 55, 59];
const selected = players.find(player => player > 70)
console.log(selected);
// 75

/* filter and find er moddhe difference:
1. filter akta arrray dibe , find kono array dibe na
2. condition fullfil kore sobai kei return korbe filter, sudhu prothom take return korbe find;
 */

/* 1. map: operation kore return korbe
2. forEach: operation kore rekhe dbe kono return korbe na
3. filter: condition check kore array akare return korbe sobai ke;
4. find: conditon check kore normally return korbe number akare.. sudhu prothom condition fullfilled kari ke return korbe */
// 5. Reduce ?? next a ase 
