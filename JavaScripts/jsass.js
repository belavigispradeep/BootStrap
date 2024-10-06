let max = prompt("Enter the maximum number..");

let random = Math.floor(Math.random()*max)+1;

let guess = prompt(`Guess the number between 1 to ${max}`);

while(true){

    if(guess == "quit"){
        console.log("you quit the game");
        break;
    }

    if(guess == random){
        console.log(`You guessed it correct... the random number is ${random}`);
        break;
        }else if(guess < random){
            guess = prompt("The guessed number is too small...pleace try again");
        }else{
            guess = prompt("The guessed number is too big...please try again");
        }
}