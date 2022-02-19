//Dans index.html ajout "data-itemvalue="1"" sur chaque button userChoice

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