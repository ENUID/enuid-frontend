function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  const messagesContainer = document.getElementById("messages");

  // User message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = message;
  messagesContainer.appendChild(userMsg);

  // Bot response
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = "Thanks for sharing. I'm here with you. ❤️";
  messagesContainer.appendChild(botMsg);

  userInput.value = "";
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Toggle theme
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("light-mode");
});
