const firstNames = [
  "James",
  "Mary",
  "Robert",
  "Patricia",
  "John",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Karen",
  "Christopher",
  "Nancy",
  "Daniel",
  "Lisa",
  "Matthew",
  "Betty",
  "Anthony",
  "Margaret",
  "Mark",
  "Sandra",
];
const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
];
let result = [];
for (const firstName of firstNames) {
  for (const lastName of lastNames) {
    result.push(firstName + " " + lastName);
  }
}
function getNickname() {
  const randomNicknameIndex = Math.floor(Math.random() * result.length);
  return result.splice(randomNicknameIndex, 1)[0];
}
for (let i = 1; i <= 456; i++) {
  playerNameInputField = document.createElement("input");
  playerNameInputField.setAttribute("type", "text");
  playerNameInputField.setAttribute("id", "player-" + i);
  playerNameInputField.setAttribute("class", "players");
  playerNameInputField.setAttribute("value", getNickname());
  playerNameInputField.setAttribute("placeholder", playerNameInputField.value);
  document.getElementById("player-names").appendChild(playerNameInputField);
}
for (let i = 1; i <= 456; i++) {
  let checkboxInputField = document.createElement("input");
  checkboxInputField.setAttribute("type", "checkbox");
  checkboxInputField.setAttribute("id", "checkbox-" + i);
  checkboxInputField.setAttribute("class", "checkbox-size");
  document.getElementById("checkboxes").appendChild(checkboxInputField);
}
for (let i = 1; i <= 456; i++) {
  document.getElementById("player-numbers").innerHTML += i + "<br>";
}
let playersRemaining = [];
let starredPlayers = [];
let originalPlayersRemaining = [];
let originalStarredPlayers = [];
let duringGame = false;
let playerStatus = "alive";
let currentGame = "Red Light Green Light";
let redLightGreenLightPlayersRemaining;
let playersLeavePlayersRemaining;
let sugarHoneycombsPlayersRemaining;
let brawlPlayersRemaining;
let tugOfWarPlayersRemaining;
let marblesPlayersRemaining;
let glassSteppingStonesPlayersRemaining;
let knifeFightingPlayersRemaining;
let squidGamePlayersRemaining;
let winners = [];

function randomizePlayerNames() {
  result = [];
  for (const firstName of firstNames) {
    for (const lastName of lastNames) {
      result.push(firstName + " " + lastName);
    }
  }
  for (let i = 1; i <= 456; i++) {
    document.getElementById("checkbox-" + i).checked = false;
    document.getElementById("player-" + i).value = getNickname();
    document.getElementById("player-" + i).placeholder =
      document.getElementById("player-" + i).value;
  }
}
function resetPlayerNames() {
  for (let i = 1; i <= 456; i++) {
    document.getElementById("checkbox-" + i).checked = false;
    document.getElementById("player-" + i).value = document.getElementById(
      "player-" + i
    ).placeholder;
  }
}
function checkboxAutomatically() {
  for (let i = 1; i <= 456; i++) {
    if (
      document.getElementById("player-" + i).value !=
      document.getElementById("player-" + i).placeholder
    ) {
      document.getElementById("checkbox-" + i).checked = true;
    } else {
      document.getElementById("checkbox-" + i).checked = false;
    }
  }
}
document
  .getElementById("player-names")
  .addEventListener("change", checkboxAutomatically);
function submitPlayerNames() {
  duringGame = true;
  for (let i = 1; i <= 456; i++) {
    let number = i.toString().padStart(3, "000");
    document.getElementById("player-" + i).value += "-" + number;
  }
  for (let index = 1; index <= 456; index++) {
    document.getElementById("checkbox-" + index).value =
      document.getElementById("player-" + index).value;
  }
  document.getElementById("checkboxes").style.display = "none";
  document.getElementById("player-names").style.display = "none";
  document.getElementById("player-numbers").style.display = "none";
  document.getElementById("randomize-player-names").style.display = "none";
  document.getElementById("reset-player-names").style.display = "none";
  document.getElementById("submit-player-names").style.display = "none";
  document.getElementById("watchlist").style.display = "table";
  document.getElementById("title").innerHTML = "Game #1: Red Light Green Light";
  document.getElementById("number-of-players-remaining").innerHTML = "456";
  const inputs = document.getElementsByClassName("players");
  for (const input of inputs) {
    playersRemaining.push(input.value);
  }
  let checkboxesChecked = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  for (let i = 0; i < checkboxesChecked.length; i++) {
    starredPlayers.push(checkboxesChecked[i].value);
  }
  table = document.getElementById("watchlist");
  for (let i = 1; i <= starredPlayers.length; i++) {
    addRow = table.insertRow(table.rows.length);
    addRow.setAttribute("id", "row-" + i);
    cell1 = addRow.insertCell(0);
    cell2 = addRow.insertCell(1);
    cell1.innerHTML = starredPlayers[i - 1];
    cell2.innerHTML = "Alive";
  }
  redLightGreenLightPlayersRemaining = Math.floor(Math.random() * 101 + 178);
  if (playersRemaining.length - 278 <= 1) {
    skipGame();
  }
  document.getElementById("game-image").src="./images/Red Light Green Light.jpg";
  originalPlayersRemaining = [...playersRemaining];
  originalStarredPlayers = [...starredPlayers];
}
window.addEventListener("keydown", (event) => {
  if (event.key == "s" && duringGame === true) {
    document.getElementById("dead-player").style = "display:block";
    randomPlayerIndex = Math.floor(Math.random() * playersRemaining.length);
    randomPlayer = playersRemaining[randomPlayerIndex];
    if (starredPlayers.includes(randomPlayer)) {
      function myFunction(element) {
        return randomPlayer == element;
      }
      starredPlayerIndex = starredPlayers.findIndex(myFunction);
      //row = document.getElementById("watchlist").rows;
      //let column = row[starredPlayers.indexOf(randomPlayer) + 1].cells;
      //column[1].innerHTML = "Eliminated";
      document.getElementById("dead-player").style.color = "red";
      table.deleteRow(
        document.getElementById("row-" + (starredPlayerIndex + 1)).rowIndex
      );
      addRow = table.insertRow(table.rows.length);
      addRow.setAttribute("id", "row-" + (table.rows.length - 1));
      cell1 = addRow.insertCell(0);
      cell2 = addRow.insertCell(1);
      cell1.innerHTML = randomPlayer;
      cell2.innerHTML = "Eliminated";
    } else {
      document.getElementById("dead-player").style.color = "black";
    }
    document.getElementById("dead-player").innerHTML =
      randomPlayer + " Has Been Eliminated";
    playersRemaining.splice(randomPlayerIndex, 1);
    document.getElementById("number-of-players-remaining").innerHTML =
      playersRemaining.length;
    if (currentGame === "Red Light Green Light") {
      redLightGreenLight();
    } else if (currentGame === "Players Leave") {
      playersLeave();
    } else if (currentGame === "Sugar Honeycombs") {
      sugarHoneycombs();
    } else if (currentGame === "Brawl") {
      brawl();
    } else if (currentGame === "Tug of War") {
      tugOfWar();
    } else if (currentGame === "Marbles") {
      marbles();
    } else if (currentGame === "Glass Stepping Stones") {
      glassSteppingStones();
    } else if (currentGame === "Knife Fighting") {
      knifeFighting();
    } else if (currentGame === "Squid Game") {
      squidGame();
    }
    function redLightGreenLight() {
      if (playersRemaining.length === redLightGreenLightPlayersRemaining) {
        duringGame = false;
        window.setTimeout(redLightGreenLightDone, 1000);
      }
    }
    function redLightGreenLightDone() {
      alert(
        "Red Light Green Light Is Over. " +
          (456 - redLightGreenLightPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Players Leave";
      playersLeavePlayersRemaining =
        redLightGreenLightPlayersRemaining -
        Math.floor(Math.random() * 11 + 10);
      if (playersRemaining.length - 20 <= 1) {
        playersLeavePlayersRemaining = redLightGreenLightPlayersRemaining;
        sugarHoneycombsPlayersRemaining =
          redLightGreenLightPlayersRemaining -
          Math.floor(Math.random() * 21 + 70);
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Players Leave.jpg";
    }
    function playersLeave() {
      if (playersRemaining.length === playersLeavePlayersRemaining) {
        duringGame = false;
        window.setTimeout(playersLeaveDone, 1000);
      }
    }
    function playersLeaveDone() {
      alert(
        "Players Leave Is Over. " +
          (redLightGreenLightPlayersRemaining - playersLeavePlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Sugar Honeycombs";
      sugarHoneycombsPlayersRemaining =
        playersLeavePlayersRemaining - Math.floor(Math.random() * 21 + 70);
      if (playersRemaining.length - 90 <= 1) {
        sugarHoneycombsPlayersRemaining = playersLeavePlayersRemaining;
        brawlPlayersRemaining =
          playersLeavePlayersRemaining - Math.floor(Math.random() * 11 + 20);
        while (brawlPlayersRemaining % 20 != 0) {
          brawlPlayersRemaining -= 1;
        }
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Sugar Honeycombs.jpg";
    }
    function sugarHoneycombs() {
      if (playersRemaining.length === sugarHoneycombsPlayersRemaining) {
        duringGame = false;
        window.setTimeout(sugarHoneycombsDone, 1000);
      }
    }
    function sugarHoneycombsDone() {
      alert(
        "Sugar Honeycombs Is Over. " +
          (playersLeavePlayersRemaining - sugarHoneycombsPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Brawl";
      brawlPlayersRemaining =
        sugarHoneycombsPlayersRemaining - Math.floor(Math.random() * 11 + 20);
      while (brawlPlayersRemaining % 20 != 0) {
        brawlPlayersRemaining -= 1;
      }
      if (playersRemaining.length - 49 <= 1) {
        brawlPlayersRemaining = sugarHoneycombsPlayersRemaining;
        tugOfWarPlayersRemaining = sugarHoneycombsPlayersRemaining / 2;
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Brawl.jfif";
    }
    function brawl() {
      if (playersRemaining.length === brawlPlayersRemaining) {
        duringGame = false;
        window.setTimeout(brawlDone, 1000);
      }
    }
    function brawlDone() {
      alert(
        "Brawl Is Over. " +
          (sugarHoneycombsPlayersRemaining - brawlPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Tug of War";
      tugOfWarPlayersRemaining = brawlPlayersRemaining / 2;
      if (playersRemaining.length / 2 <= 1) {
        tugOfWarPlayersRemaining = brawlPlayersRemaining;
        marblesPlayersRemaining =
          brawlPlayersRemaining - Math.floor(Math.random() * 11 + 20);
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Tug of War.jfif";
    }
    function tugOfWar() {
      if (playersRemaining.length === tugOfWarPlayersRemaining) {
        duringGame = false;
        window.setTimeout(tugOfWarDone, 1000);
      }
    }
    function tugOfWarDone() {
      alert(
        "Tug Of War Is Over. " +
          (brawlPlayersRemaining - tugOfWarPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Marbles";
      marblesPlayersRemaining =
        tugOfWarPlayersRemaining / 2 - Math.floor(Math.random() * 6 + 0);
      if (playersRemaining.length / 2 - 5 <= 1) {
        marblesPlayersRemaining = tugOfWarPlayersRemaining;
        glassSteppingStonesPlayersRemaining =
          tugOfWarPlayersRemaining - Math.floor(Math.random() * 5 + 11);
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Marbles.jpg";
    }
    function marbles() {
      if (playersRemaining.length === marblesPlayersRemaining) {
        duringGame = false;
        window.setTimeout(marblesDone, 1000);
      }
    }
    function marblesDone() {
      alert(
        "Marbles Is Over. " +
          (tugOfWarPlayersRemaining - marblesPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Glass Stepping Stones";
      glassSteppingStonesPlayersRemaining =
        marblesPlayersRemaining - Math.floor(Math.random() * 5 + 11);
      if (playersRemaining.length - 15 <= 1) {
        glassSteppingStonesPlayersRemaining = marblesPlayersRemaining;
        knifeFightingPlayersRemaining = 2;
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Glass Stepping Stones.jpg";
    }
    function glassSteppingStones() {
      if (playersRemaining.length === glassSteppingStonesPlayersRemaining) {
        duringGame = false;
        window.setTimeout(glassSteppingStonesDone, 1000);
      }
    }
    function glassSteppingStonesDone() {
      alert(
        "Glass Stepping Stones Is Over. " +
          (marblesPlayersRemaining - glassSteppingStonesPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Knife Fighting";
      knifeFightingPlayersRemaining = 2;
      if (playersRemaining.length <= 1) {
        knifeFightingPlayersRemaining = 2;
        squidGamePlayersRemaining = 1;
        skipGame();
      }
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Knife Fighting.jpg";
    }
    function knifeFighting() {
      if (playersRemaining.length === knifeFightingPlayersRemaining) {
        duringGame = false;
        window.setTimeout(knifeFightingDone, 1000);
      }
    }
    function knifeFightingDone() {
      alert(
        "Knife Fighting Is Over. " +
          (glassSteppingStonesPlayersRemaining -
            knifeFightingPlayersRemaining) +
          " Players Were Eliminated"
      );
      document.getElementById("dead-player").style = "display:none";
      currentGame = "Squid Game";
      squidGamePlayersRemaining = 1;
      duringGame = true;
      document.getElementById("title").innerHTML = currentGame;
      document.getElementById("game-image").src="./images/Squid Game.jpg";
    }
    function squidGame() {
      if (playersRemaining.length === squidGamePlayersRemaining) {
        duringGame = false;
        window.setTimeout(squidGameDone, 1000);
      }
    }
    function squidGameDone() {
      alert(
        "Squid Game Is Over. " +
          (knifeFightingPlayersRemaining - squidGamePlayersRemaining) +
          " Players Were Eliminated. " +
          playersRemaining[0] +
          " Has Won!"
      );
      document.getElementById("watchlist").style.display = "none";
      document.getElementById("dead-player").style.display = "none";
      document.getElementById("restart-game").style.display = "block";
      document.getElementById("game-image").src="";
      standings();
    }
  }
});
function skipGame() {
  if (currentGame === "Red Light Green Light") {
    currentGame = "Players Leave";
  } else if (currentGame === "Players Leave") {
    currentGame = "Sugar Honeycombs";
  } else if (currentGame === "Sugar Honeycombs") {
    currentGame = "Brawl";
  } else if (currentGame === "Brawl") {
    currentGame = "Tug of War";
  } else if (currentGame === "Tug of War") {
    currentGame = "Marbles";
  } else if (currentGame === "Marbles") {
    currentGame = "Glass Stepping Stones";
  } else if (currentGame === "Glass Stepping Stones") {
    currentGame = "Knife Fighting";
  } else if (currentGame === "Knife Fighting") {
    currentGame = "Squid Game";
  }
}
function standings() {
  standingsTable = document.getElementById("standings");
  function findPlayer(element) {
    return playersRemaining[0] == element;
  }
  document.getElementById("standings").style.display = "table";
  if (winners.includes(playersRemaining[0])) {
    winnerIndex = winners.findIndex(findPlayer);
    row = standingsTable.rows;
    let column = row[winnerIndex + 1].cells;
    column[1].innerHTML = parseInt(column[1].innerHTML) + 1;
  }
  else {
    winners.push(playersRemaining[0]);
    addStandingsRow = standingsTable.insertRow(standingsTable.rows.length);
    standingsCell1 = addStandingsRow.insertCell(0);
    standingsCell2 = addStandingsRow.insertCell(1);
    standingsCell1.innerHTML = playersRemaining[0];
    standingsCell2.innerHTML = "1";
  }
}
function restartGame() {
  playersRemaining = [...originalPlayersRemaining];
  starredPlayers = [...originalStarredPlayers];
  duringGame = true;
  document.getElementById("checkboxes").style.display = "none";
  document.getElementById("player-names").style.display = "none";
  document.getElementById("player-numbers").style.display = "none";
  document.getElementById("watchlist").style.display = "table";
  document.getElementById("randomize-player-names").style.display = "none";
  document.getElementById("reset-player-names").style.display = "none";
  document.getElementById("restart-game").style.display = "none";
  document.getElementById("title").innerHTML = "Game #1: Red Light Green Light";
  document.getElementById("number-of-players-remaining").innerHTML = "456";
  document.getElementById("dead-player").style.display = "none";
  document.getElementById("standings").style.display = "none";
  table.innerHTML = "";
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  tr.appendChild(th1);
  tr.appendChild(th2);
  th1.style.border = "solid 1px black";
  th1.innerHTML = "Player";
  th2.style.border = "solid 1px black";
  th2.innerHTML = "Status";
  for (let i = 1; i <= starredPlayers.length; i++) {
    addRow = table.insertRow(table.rows.length);
    addRow.setAttribute("id", "row-" + i);
    cell1 = addRow.insertCell(0);
    cell2 = addRow.insertCell(1);
    cell1.innerHTML = starredPlayers[i - 1];
    cell2.innerHTML = "Alive";
  }
  currentGame = "Red Light Green Light";
  document.getElementById("game-image").src="./images/Red Light Green Light.jpg";
}