// chatbot.js

// Get references to the chatbot elements
const chatbotContainer = document.getElementById('chatbot');
const sendButton = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const messagesContainer = document.getElementById('chatbot-messages');

// Toggle the chatbot visibility with animation
function toggleChatbot() {
    const isVisible = chatbotContainer.classList.contains('visible');
    chatbotContainer.classList.toggle('visible');
    if (!isVisible) {
        setTimeout(() => { chatbotContainer.scrollIntoView({ behavior: 'smooth' }); }, 300);
    }
}

// Add event listeners for sending messages
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send the user's message
async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) {
        alert('Please enter a message before sending.');
        return;
    }

    addMessage('user', userMessage);
    chatInput.value = '';
    addMessage('bot', '...', true); // Show typing indicator

    const botResponse = await getBotResponse(userMessage);
    updateLastBotMessage(botResponse);
}

// Function to add messages to the chat
function addMessage(type, text, isTyping = false) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.innerText = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    if (isTyping) {
        message.classList.add('typing'); // Add typing animation class
    }
}

// Update the last bot message (removing the typing indicator)
function updateLastBotMessage(response) {
    const lastMessage = messagesContainer.lastElementChild;
    lastMessage.innerText = response;
    lastMessage.classList.remove('typing');
}

// Simulating a bot response (replace this with actual API call)
async function getBotResponse(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (message.toLowerCase().includes('help')) {
                resolve('Sure! Tell me what you need help with, and I will do my best to assist you.');
            } else {
                resolve(`Bot: You asked about "${message}". How can I assist you further?`);
            }
        }, 1500);
    });
}
