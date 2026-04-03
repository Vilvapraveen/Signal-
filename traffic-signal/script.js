let current = "red";
let time = 5;
let countdown;

function updateUI() {
  document.getElementById("red").classList.remove("on");
  document.getElementById("yellow").classList.remove("on");
  document.getElementById("green").classList.remove("on");

  document.getElementById(current).classList.add("on");
  document.getElementById("status").innerText = current.toUpperCase();
  document.getElementById("timer").innerText = "Time Left: " + time + "s";
}

function nextLight() {
  if (current === "red") {
    current = "green";
    time = 4;
  } else if (current === "green") {
    current = "yellow";
    time = 2;
  } else {
    current = "red";
    time = 5;
  }

  startCycle();
}

function startCycle() {
  clearInterval(countdown);

  updateUI();

  countdown = setInterval(() => {
    time--;
    updateUI();

    if (time === 0) {
      clearInterval(countdown);
      nextLight();
    }
  }, 1000);
}

function setLight(color) {
  current = color;

  if (color === "red") time = 5;
  else if (color === "green") time = 4;
  else time = 2;

  startCycle();
}

startCycle();
