// function checkAge(){
//     const ageField = document.getElementById("age");
//     const ageText = ageField.value;
// const errorTag = document.getElementById("error");

//     try{
//         console.log(bbaria); // jei jnishta error khaite pari seta try er vitore likbo.. as a result error dileo porer code gula execute hobe at least 
        
//     }
//     catch(err){
//         console.log("error: ",err);
//         errorTag.innerHTML = 'something wrong'
//     }

//     finally{
//         console.log("all done inside try-catch"); // error khak ba na khak aita execute korbei.. 
//     }
//     console.log(1111);
// }


function checkAge(){
    const ageField = document.getElementById("age");
    const ageText = ageField.value;
const errorTag = document.getElementById("error");

    try{
       const age = parseInt(ageText);

       if(isNaN(age)){
        // console.log("age is not found", age, ageText);
        throw "please enter a number "
       }
       else if(age<18){
        throw "baccha kaccha not allowed";
       }
       else if(age > 30){
        throw "bura manush aikhane aishen na hudai";
       }
       errorTag.innerHTML = '';
        
    }
    catch(err){
        console.log("error: ",err);
        // errorTag.innerHTML = 'something wrong'
        errorTag.innerHTML = 'Error:' + err
    }

    finally{
        console.log("all done inside try-catch"); // error khak ba na khak aita execute korbei.. 
    }
    console.log(1111);
}

// throw
/* the throw statement defines a custom error. 
you can throw an execution 
the exceptin can be a string , a Number, a boolean and an Object; */