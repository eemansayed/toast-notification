const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Messange One",
  "Messange Two",
  "Messange Three",
  "Messange Four",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMessage();
}

function getRandomMessage() {
  return messages[Math.floor() * messages.length];
}
