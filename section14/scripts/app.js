let edittedPlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement =document.getElementById('active-game');

const editPlayer1BtnElement = document.getElementById('eidt-player-1-btn');
const editPlayer2BtnElement = document.getElementById('eidt-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);