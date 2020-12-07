let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>{
    const vari=Math.floor(Math.random()*10);
    return vari;
};

console.log(generateTarget());

const compareGuesses=(user_Guess, computer_Guess, target_number)=>{
    const humandiffrence = Math.abs(user_Guess-target_number);
    const computerdiffrence = Math.abs(computer_Guess-target_number);
    return humandiffrence <= computerdiffrence;
}


const updateScore=()=>{
    
}

