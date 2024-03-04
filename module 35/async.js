console.log(1)
console.log(2)
/* setTimeout(dosomething, 4000);  */// settimeout er duita parameter, 4000 mili second por call korbe  

setTimeout( () => {
    console.log("lazy logged")
} , 4000)
console.log(4)
console.log(5)
console.log(6)

function dosomething(){
    console.log(3);
}

// dosomething er jagai fetch use korle dkha jabe fetch kaj kortese na 3 no line a . fetch vscode a kaj korbe na, browser a console kora lagbe. 

/* setTimeout dileo sequentially 3 print hobe na. cz setTimeout r fetch er moddhe carpa ase.. */ 


/* Javascript by default single threaded.. akta serial wise cholbe.. akta line dhore chole.. jemon pipra ra single threaded.. 

single threaded means only one statement is executed at a time. 
Javascript only has one call stack 
Javascript runs code line by line 
must finish executing a piece of code before moving onto the next  */

/* synchoronous-> 
until the first image is loaded completely , the second imag doesn't start loading 

aysnchronous->
all images are loading at their own pace.  */



