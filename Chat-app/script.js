document.getElementById('send-button').addEventListener('click',addMsg)

function addMsg(){
  const messageInput = document.getElementById('message-input');
  const messageText = messageInput.value.trim();
  if (messageText) {
    const messageElement = document.createElement('div');
    messageElement.setAttribute('class','msg')
    messageElement.textContent = messageText;
    document.querySelector('.chat-messages').appendChild(messageElement);
    messageInput.value = '';
  }
}
