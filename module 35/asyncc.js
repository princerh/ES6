// const myLoader = () => {
//     return new Promise((resolve, reject) => {
// const success = Math.random()
// if(success <= 0.5){
//     resolve(success)
// }
// else{
//     reject(success); 
// }
//     })
// }

// myLoader()
//     .then(data => console.log("resolved data", data));
//     .catch(err => console.log("rejected with value", err));


// fetch('')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// // aitar valo akta version function diye korte hoy 
// async function loadData(){
//     const res = await fetch('');
//     const data = await res.json();
//     console.log(data)
// }
// // function diye korar subidha hocche then diye korle aktar niche akta layer dhuke jaite pare, but function a seta dhuke na 

// loadData();

// // arrow function diye 
// const taskLoader = async() => {
//     const res = await fetch('');
//     const data = await res.json()
// }

// taskLoader();

{
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
   }
   f();