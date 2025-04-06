const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userText = input.value.trim();
  if (userText === "") return;

  appendMessage(userText, "user");

  setTimeout(() => {
    const botReply = getBotReply(userText);
    appendMessage(botReply, "bot");
  }, 800);

  input.value = "";
});

function appendMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(text) {
  // Simple dummy responses
  const lower = text.toLowerCase();
  if (lower.includes("hi") || lower.includes("hello"))
    return "Hey there! 👋 How can I assist you emotionally?";
  if (lower.includes("sad"))
    return "I'm here for you 💙. Want to talk about it?";
  if (lower.includes("happy"))
    return "That's great! 😊 What made you feel happy?";
  return "I'm still learning emotional intelligence. Try asking me something else!";
}
