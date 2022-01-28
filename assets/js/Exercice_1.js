//////////FONCTIONS//////////

// Comparaison des 2 choix.

function compareChoice(userRandom, computerRandom) {
    let result;

    if (computerRandom == userRandom) {
        result = `égalité !`;

    } else if (userRandom == 'ciseaux' && computerRandom == 'feuille') {
        result = `gagné(e) !`;

    } else if (userRandom == 'pierre' && computerRandom == 'ciseaux') {
        result = `gagné(e) !`;

    } else if (userRandom == 'feuille' && computerRandom == 'pierre') {
        result = `gagné(e) !`;

    } else {
        result = `perdu !`;
    }

    countPart ++;
    return result;
}


//Choix de l'ordinateur.

function computerChoice() {   
    let computerRandom = Math.round(Math.random() * 2);
        
    if  (computerRandom == 0) {
        computerRandom = 'pierre';
    
    } else if  (computerRandom == 1) {
        computerRandom = 'feuille';
    
    } else {
        computerRandom = 'ciseaux';

    }
    return computerRandom;
}


//Messages de Score.

function scoreMessage(result) {
    if (result == `égalité !`) {
        resultGame.innerHTML = `égalité !`;       

    } else if (result == `gagné(e) !`) {
        resultGame.innerHTML = `Vous avez gagné(e) !`;
        userScoreBox++;

    } else {
        resultGame.innerHTML = `Vous avez perdu !`;
        computerScoreBox++;
    }

    partProgress.innerHTML = `Partie : ${countPart}`;
    userScore.innerHTML = `Votre score est de ${userScoreBox}`;
    computerScore.innerHTML = `Le score de l'ordinateur est de ${computerScoreBox}`;
}

//Relancer le jeu.

function reloadScore(countPart, userScoreBox, computerScoreBox) {
    if (countPart == 3) {
        console.log(`Fin de la partie.`)
        userRandomRock.setAttribute("disabled", "disabled");
        userRandomPaper.setAttribute("disabled", "disabled");
        userRandomScissors.setAttribute("disabled", "disabled");
        reloadGame.removeAttribute("disabled");
        if (userScoreBox > computerScoreBox) {
            userWinRound ++;
            console.log(userWinRound);
        } else if (userScoreBox < computerScoreBox) {
            computerWinRound ++;
        }
        userRoundProgress.innerHTML = `Vous avez gagné ${userWinRound} manche(s).`;
        computerRoundProgress.innerHTML = `L'ordinateur a gagné ${computerWinRound} manche(s).`;
    }
}


//////////Déclaration des variables//////////

let userRandomRock = document.getElementById('userRandomRock');
let userRandomPaper = document.getElementById('userRandomPaper');
let userRandomScissors = document.getElementById('userRandomScissors');
let reloadGame = document.getElementById('reloadGame');

let partProgress = document.getElementById('partProgress');
let userScore = document.getElementById('userScore');
let computerScore = document.getElementById('computerScore');
let resultGame = document.getElementById('resultGame');
let userRoundProgress = document.getElementById('userRoundProgress');
let computerRoundProgress = document.getElementById('computerRoundProgress');



//////////Début du jeu//////////

let countPart = 0;
let userWinRound = 0;
let computerWinRound = 0;
let userScoreBox = 0;
let computerScoreBox = 0;

userRandomRock.removeAttribute("disabled");
userRandomPaper.removeAttribute("disabled");
userRandomScissors.removeAttribute("disabled");
reloadGame.setAttribute("disabled", "disabled");

    
//Choix de l'utilisateur : Pierre

userRandomRock.addEventListener('click', () => {
    let userRandom = 'pierre';

    //Choix de l'ordinateur.

    let computerRandom = computerChoice();

    // Comparaison des 2 choix.

    let result = compareChoice(userRandom, computerRandom);

    //Messages de Score.

    scoreMessage(result);

    //Relancer le jeu.

    reloadScore(countPart, userScoreBox, computerScoreBox);
});

//Choix de l'utilisateur : Feuille

userRandomPaper.addEventListener('click', () => {
    let userRandom = 'feuille';

    //Choix de l'ordinateur.

    let computerRandom = computerChoice();

    // Comparaison des 2 choix.

    let result = compareChoice(userRandom, computerRandom);

    //Messages de Score.

    let resultMessage = scoreMessage(result);
    return resultMessage;

});

//Choix de l'utilisateur : Ciseaux

userRandomScissors.addEventListener('click', () => {
    let userRandom = 'ciseaux';

    //Choix de l'ordinateur.

    let computerRandom = computerChoice();

    // Comparaison des 2 choix.

    let result = compareChoice(userRandom, computerRandom);

    //Messages de Score.

    let resultMessage = scoreMessage(result);
    return resultMessage;

});















//Correction

// 2 joueurs (user, computer)
// let user;
// let computer;

// let userChoice;

// btnPierre.addEventListener('click', () => {
//     userChoice = 'pierre';
// });

// user choisi parmi 3 choix (pierre, feuille, ciseaux)
// computer choisi parmi 3 choix (pierre, feuille, ciseaux)

// Comparer userChoice et computerChoice

// si userChoice == computerChoice  
//     résultat = 'égalité'

// sinon si userChoice == feuille et computerChoice == ciseaux
//     ou userChoice == ciseaux et computerChoice == pierre
//     ou userChoice == pierre et computerChoice == feuille
// Alors    
//     résultat = 'défaite'

// sinon    
//     résultat = 'victoire'




//     Selon résultat => victoire, égalité, défaite




// Comparaison des 2 choix.

// function compareChoice(userRandom, computerRandom) {

//     if (computerRandom == 'ciseaux' && userRandom == 'feuille') {
//         resultGame.innerHTML = `Les ciseaux coupent la feuille : vous avez perdu !`;
//         computerScore++
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;

//     } else if (userRandom == 'ciseaux' && computerRandom == 'feuille') {
//         resultGame.innerHTML = `Les ciseaux coupent la feuille : vous avez gagné(e) !`;
//         userScore++
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;

//     } else if (computerRandom == 'pierre' && userRandom == 'ciseaux') {
//         resultGame.innerHTML = `La pierre casse les ciseaux : vous avez perdu !`;
//         computerScore++
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;

//     } else if (userRandom == 'pierre' && computerRandom == 'ciseaux') {
//         resultGame.innerHTML = `La pierre casse les ciseaux : vous avez gagné(e) !`;
//         resultGame.innerHTML = `Les ciseaux coupent la feuille : vous avez gagné(e) !`;
//         userScore++
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;

//     } else if (computerRandom == 'feuille' && userRandom == 'pierre') {
//         resultGame.innerHTML = `La feuille enveloppe la pierre : vous avez perdu !`;
//         computerScore++
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;

//     } else if (userRandom == 'feuille' && computerRandom == 'pierre') {
//         resultGame.innerHTML = `La feuille enveloppe la pierre : vous avez gagné(e) !`;
//         resultGame.innerHTML = `Les ciseaux coupent la feuille : vous avez gagné(e) !`;
//         userScore++
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;

//     } else {
//         resultGame.innerHTML = `Égalité parfaite !`;
//         resultGame.innerHTML = `Les ciseaux coupent la feuille : vous avez gagné(e) !`;
//         userScore.innerHTML = userScore;
//         computerScore.innerHTML = computerScore;
//     }