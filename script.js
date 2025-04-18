
let cookies = 0;
let omas = 0;
let multiplier = 1;

function startGame() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play().catch(() => {});
}

const cookie = document.getElementById("cookie");
const counter = document.getElementById("cookieCount");
const omasDisplay = document.getElementById("omas");
const clickSound = document.getElementById("clickSound");

cookie.addEventListener("click", () => {
  cookies += multiplier;
  counter.textContent = `Kekse: ${cookies}`;
  clickSound.currentTime = 0;
  clickSound.play();
});

function buyUpgrade() {
  if (cookies >= 10) {
    cookies -= 10;
    omas++;
    multiplier += 1;
    omasDisplay.textContent = `Omas: ${omas}`;
    counter.textContent = `Kekse: ${cookies}`;
  }
}
