//////////FONCTIONS//////////

// Comparaison des 2 choix.

function compareChoice(userRandom, computerRandom) {
    let result;
    if (computerRandom == userRandom) {
        result = `égalité !`;
    } else if (userRandom == 'Ciseaux' && computerRandom == 'Feuille') {
        result = `Victoire !`;
    } else if (userRandom == 'Pierre' && computerRandom == 'Ciseaux') {
        result = `Victoire !`;
    } else if (userRandom == 'Feuille' && computerRandom == 'Pierre') {
        result = `Victoire !`;
    } else {
        result = `Défaite !`;
    }
    countRound ++;
    return result;
};

//Choix de l'ordinateur.

function computerChoice() {   
    let computerRandom = Math.floor(Math.random() * 3) + 1;        
    if  (computerRandom == 1) {
        computerRandom = 'Pierre';    
    } else if  (computerRandom == 2) {
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
    } else if (result == `Victoire !`) {
        resultGame.innerHTML = `Victoire !`;
        userScoreBox++;
    } else {
        resultGame.innerHTML = `Défaite !`;
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
    localStorage.setItem('winGame', userWinPart);
    userPartProgress.innerHTML = `<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-racing-championship-victory-cup-isolated-on-a-white-background-rewards-color-tal-revivo.png"/> : ${userWinPart}`;
    computerPartProgress.innerHTML = `<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-racing-championship-victory-cup-isolated-on-a-white-background-rewards-color-tal-revivo.png"/> : ${computerWinPart}`;
};

//////////Déclaration des variables//////////

let staticBackdrop = document.getElementById('staticBackdrop');
let sendModalBtn = document.getElementById('sendModalBtn');
let firstNameModal = document.getElementById('firstNameModal');
let namePlayerModal = document.getElementById('namePlayerModal');
let rulesModal = document.getElementById('rulesModal');
let userRandomRock = document.getElementById('userRandomRock');
let userRandomPaper = document.getElementById('userRandomPaper');
let userRandomScissors = document.getElementById('userRandomScissors');
let computerRandomRock = document.getElementById('computerRandomRock');
let computerRandomPaper = document.getElementById('computerRandomPaper');
let computerRandomScissors = document.getElementById('computerRandomScissors');
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
computerRandomRock.setAttribute("disabled", "disabled");
computerRandomPaper.setAttribute("disabled", "disabled");
computerRandomScissors.setAttribute("disabled", "disabled");
reloadGame.setAttribute("disabled", "disabled");

//Modals au chargement

$(window).on('load', function() {
    $('#staticBackdrop').modal('show');
});

sendModalBtn.addEventListener('click', () => {
    if (firstNameModal.value === '' || null || undefined) {
        namePlayerModal.innerHTML = `Player`;
    } else {
        namePlayerModal.innerHTML = firstNameModal.value;
        localStorage.setItem('userName', firstNameModal.value);
    }
    $('#rulesModal').modal('show');
});
    
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

//Correction
// let whoWin = (userChoice, computerChoice) => {
//     if( (userChoice==1 && computerChoice==3) ||
//         (userChoice==2 && computerChoice==1) ||
//         (userChoice==3 && computerChoice==2)) {
//         result = 'Gagné';
//     } else if (userChoice == computerChoice) {
//         result = 'Egalité';
//     } else {
//         result = 'Perdu';
//     }
//     return result;
// };

// let clickedElement = (event) => {
//    userChoice = parseInt(event.target.dataset.itemvalue);
//    omputerChoice = Math.floor(Math.randum() *3) +1;
//    result = whoWin(userChoice, computerChoice);
//    console.log(result);
// };

// let userChoice;
// let computerChoice;
// let result;
// let selectedItems = document.querySelectorAll('.shifumiItem');

// selectedItems.forEach(element => {
//     element.addEventListener('click', clickedElement);
// });