//////////FONCTIONS//////////

// Comparaison des 2 choix.

function compareChoice(userRandom, computerRandom) {
    let result;

    if (computerRandom == userRandom) {
        result = `égalité !`;

    } else if (userRandom == 'Ciseaux' && computerRandom == 'Feuille') {
        result = `gagné(e) !`;

    } else if (userRandom == 'Pierre' && computerRandom == 'Ciseaux') {
        result = `gagné(e) !`;

    } else if (userRandom == 'Feuille' && computerRandom == 'Pierre') {
        result = `gagné(e) !`;

    } else {
        result = `perdu !`;
    }

    countRound ++;
    return result;
};


//Choix de l'ordinateur.

function computerChoice() {   
    let computerRandom = Math.round(Math.random() * 2);
        
    if  (computerRandom == 0) {
        computerRandom = 'Pierre';
    
    } else if  (computerRandom == 1) {
        computerRandom = 'Feuille';
    
    } else {
        computerRandom = 'Ciseaux';

    }
    return computerRandom;
};


//Messages de Score.

function scoreMessage(result) {
    if (result == `égalité !`) {
        resultGame.innerHTML = `Égalité !`;       

    } else if (result == `gagné(e) !`) {
        resultGame.innerHTML = `Gagné(e) !`;
        userScoreBox++;

    } else {
        resultGame.innerHTML = `Perdu !`;
        computerScoreBox++;
    }

    roundProgress.innerHTML = `Manche : ${countRound}`;
    userScore.innerHTML = `Score : ${userScoreBox}`;
    computerScore.innerHTML = `Score : ${computerScoreBox}`;
};

//Fin du jeu.

function endGame(countRound, userScoreBox, computerScoreBox) {
    if (countRound == 3) {
        userRandomRock.setAttribute("disabled", "disabled");
        userRandomPaper.setAttribute("disabled", "disabled");
        userRandomScissors.setAttribute("disabled", "disabled");
        reloadGame.removeAttribute("disabled");
        
        if (userScoreBox > computerScoreBox) {
            userWinPart ++;

        } else if (userScoreBox < computerScoreBox) {
            computerWinPart ++;
        }
    }
    userPartProgress.innerHTML = `Partie(s) gagnée(s) : ${userWinPart}`;
    computerPartProgress.innerHTML = `Partie(s) gagnée(s) : ${computerWinPart}`;
};


//////////Déclaration des variables//////////

let userRandomRock = document.getElementById('userRandomRock');
let userRandomPaper = document.getElementById('userRandomPaper');
let userRandomScissors = document.getElementById('userRandomScissors');
let reloadGame = document.getElementById('reloadGame');

let userScore = document.getElementById('userScore');
let userPartProgress = document.getElementById('userPartProgress');
let userRandomChoice = document.getElementById('userRandomChoice');

let computerScore = document.getElementById('computerScore');
let computerPartProgress = document.getElementById('computerPartProgress');
let computerRandomChoice = document.getElementById('computerRandomChoice');

let roundProgress = document.getElementById('roundProgress');
let resultGame = document.getElementById('resultGame');



//////////Début du jeu//////////

let countRound = 0;
let userWinPart = 0;
let computerWinPart = 0;
let userScoreBox = 0;
let computerScoreBox = 0;

userRandomRock.removeAttribute("disabled");
userRandomPaper.removeAttribute("disabled");
userRandomScissors.removeAttribute("disabled");
reloadGame.setAttribute("disabled", "disabled");

    
//Choix de l'utilisateur : Pierre

userRandomRock.addEventListener('click', () => {
    let userRandom = 'Pierre';
    userRandomChoice.innerHTML = userRandom;

    //Choix de l'ordinateur.
    let computerRandom = computerChoice();
    computerRandomChoice.innerHTML = computerRandom; 

    // Comparaison des 2 choix.
    let result = compareChoice(userRandom, computerRandom);

    //Messages de Score.
    scoreMessage(result);

    //Fin du jeu.
    endGame(countRound, userScoreBox, computerScoreBox);
});

//Choix de l'utilisateur : Feuille

userRandomPaper.addEventListener('click', () => {
    let userRandom = 'Feuille';
    userRandomChoice.innerHTML = userRandom;

    //Choix de l'ordinateur.
    let computerRandom = computerChoice();
    computerRandomChoice.innerHTML = computerRandom;

    // Comparaison des 2 choix.
    let result = compareChoice(userRandom, computerRandom);

    //Messages de Score.
    scoreMessage(result);

    //Fin du jeu.
    endGame(countRound, userScoreBox, computerScoreBox);
});

//Choix de l'utilisateur : Ciseaux

userRandomScissors.addEventListener('click', () => {
    let userRandom = 'Ciseaux';
    userRandomChoice.innerHTML = userRandom;

    //Choix de l'ordinateur.
    let computerRandom = computerChoice();
    computerRandomChoice.innerHTML = computerRandom;

    // Comparaison des 2 choix.
    let result = compareChoice(userRandom, computerRandom);

    //Messages de Score.
    scoreMessage(result);

    //Fin du jeu.
    endGame(countRound, userScoreBox, computerScoreBox);
});

//Choix de l'utilisateur : relancer le jeu

reloadGame.addEventListener('click', () => {
    countRound = 0;
    userScoreBox = 0;
    computerScoreBox = 0;
    userRandomRock.removeAttribute("disabled");
    userRandomPaper.removeAttribute("disabled");
    userRandomScissors.removeAttribute("disabled");
    reloadGame.setAttribute("disabled", "disabled");
});