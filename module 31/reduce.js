const numbers = [4,5,7,1,2,66];
const total = numbers.reduce((previous, current) => previous+current , 0)
console.log(total);
// 85

const sum = numbers.reduce( (previous,current) => previous + current ,0) // previous hocche jogfol ta , r current hocche each element, 0 hocche previous er initial value 
console.log(sum);
// 85