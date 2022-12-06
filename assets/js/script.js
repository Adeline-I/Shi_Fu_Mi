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
        computerRandomChoice.innerHTML='<img class="iconsBtn img-fluid" src="https://img.icons8.com/fluency/64/000000/stones.png" alt="3 pierres empilées"/>';
    } else if  (computerRandom == 2) {
        computerRandom = 'Feuille';  
        computerRandomChoice.innerHTML='<img class="iconsBtn img-fluid" src="https://img.icons8.com/external-ddara-flat-ddara/64/000000/external-bonsai-furniture-ddara-flat-ddara.png" alt="Bonsaï"/>';  
    } else {
        computerRandom = 'Ciseaux';
        computerRandomChoice.innerHTML='<img class="iconsBtn img-fluid" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/745A4E/external-rake-cultivation-kiranshastry-solid-kiranshastry.png" alt="Râteau"/>';

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
    userScore.innerHTML = `Manche(s) : ${userScoreBox}`;
    computerScore.innerHTML = `Manche(s) : ${computerScoreBox}`;
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
    userPartProgress.innerHTML = `Partie(s) : ${userWinPart}`;
    computerPartProgress.innerHTML = `Partie(s) : ${computerWinPart}`;
};

//////////Déclaration des variables//////////

let startModal = document.getElementById('startModal');
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
reloadGame.setAttribute("disabled", "disabled");

//Modals au chargement

$(window).on('load', function() {
    $('#startModal').modal('show');
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
    //Choix de l'ordinateur.
    let computerRandom = computerChoice();
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
    //Choix de l'ordinateur.
    let computerRandom = computerChoice();
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
    //Choix de l'ordinateur.
    let computerRandom = computerChoice();
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