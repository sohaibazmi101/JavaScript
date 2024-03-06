function myfun(){
    for(i = 1; i<= 5; i++){
        console.log(i);
    }
}

// myfun();

function addTwoNumber(num1, num2){
    console.log(num1+num2);
}

addTwoNumber(12,13);

function userLoggedIn(username){
    return `${username} just Logged in!`
}

const result = userLoggedIn("GitHub");

console.log(result);