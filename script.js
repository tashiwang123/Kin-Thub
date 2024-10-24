function order(dishName) {
    // Check if a dish name was provided
    if (dishName) {
        alert(`You have ordered: ${dishName}`);
    } else {
        alert("You have placed a general order.");
    }
}
let myName = document.getElementById("name");
let myEmail = document.getElementById("email");
let myMassage = document.getElementById("message");


function clickMe() {
      let x = myName.value;
      let y = myEmail.value;
      let  z = myMassage.value;
if (x && y && z ) {
      alert("Submitted");
}

      else{
     alert("Please fill up the form");
      }
}
// chatbot
const responses = {
    'hello': 'Hello! How can I assist you today?',
    'how are you': 'I\'m doing great, thanks for asking!',
    'what is your purpose': 'I\'m here to help you with any questions or concerns you may have.',
};

document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Prevent sending empty messages
    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot');
});

document.getElementById('toggle-chat').addEventListener('click', () => {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
});

function displayMessage(message, sender) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    return responses[lowerInput] || 'I didn\'t understand that. Please try again!';
}