let playerScore = 0;
let rollbut = document.getElementById("roll");
let startbut = document.getElementById("restart");
let playscore = document.getElementById("score");
let img = document.getElementById("image");

 
const rollDie = () => {  //So here the function is the actual clicking of the button 
    let dice = Math.floor(Math.random() * 6) + 1;  //*6 is max of 5 (0-5) so +1 is the 6
    img.src="./img/dice" + dice + ".png"; //Should load each dice image with each dice roll that happens
    playscore.textContent = dice; //What displays next to score- number from dice roll
  

    if (dice !== 1) {
        playerScore += dice;
        score.textContent = playerScore;
    }
    else {
        location.reload();
        window.alert("You hit one! Try again");
    }
    
    if (playerScore === 20){
        location.reload();
        window.alert("You've hit 20, you win!");
    }

    else if (playerScore > 20) {
        location.reload();
        window.alert("You went over twenty...game over!");
    }
};

const Play = () => {
    roll.addEventListener("click", rollDie);
    rollDie();

}

startbut.addEventListener("click", () => {
        location.reload();
    });

Play();


//remember random floor can get a rounded number

//querySelector can be used to pick which player between the two

