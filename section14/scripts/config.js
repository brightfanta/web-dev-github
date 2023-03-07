function openPlayerConfig(event) {
  edittedPlayer = +event.target.dataset.playerid; //dataset['player-id'] _ if '-' is included
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target); //building object by 'new' instanciating object based on an object blueprint

  const enteredPlayername = formData.get("playername").trim(); //get rid of white space!
  //   console.log(enteredPlayername);

  if (!enteredPlayername) {
    // == enteredPlayername === "" treated as false by using '===' don't care about type equality
    evt.target.firstElementChild.classList.add("error"); // not to override, adding new class
    errorsOutputElement.textContent = "Please enter a valid name!";
    return; //return 정의함으로써 if문의 조건이 충족되지 않으면 if문 뒷부분 함수는 실행되지 않는다.
  }

  const updatedPlayerDataElement = document.getElementById('player-'+ edittedPlayer +'-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[edittedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
