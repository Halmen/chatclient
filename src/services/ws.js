import io from 'socket.io-client';

const socket = io('http://35.157.80.184:8080/')
const userNameList = []


socket.on('connect_failed', function() {
  alert('Having trouble connecting, please reload')
})

socket.on('connect_error', function() {
  alert('Having trouble connecting, please reload')
})

const sendMessage = (e,messageInput) => {
  const user = document.querySelector('.userNameInput').value

  if((e.type!=='keypress') || (e.key ==='Enter')){
      if (user && messageInput.value ) {
        socket.emit('message', { message:messageInput.value, user})
        messageInput.value = ''
        userNameList.push(user)
      }
      if (!user && messageInput.value){
        alert('Please enter a user name!')
      }
    }
  }

const  onSendListener = () => {
  const sendButton = document.querySelector('.sendButton')
  const messageInput = document.querySelector('.messageInput')
  sendButton.addEventListener('click', function (e) {sendMessage(e, messageInput)})
  messageInput.addEventListener('keypress',function (e) {sendMessage(e, messageInput)})  
}

const onIncomingMessageListener = () =>{
  socket.on('message', function ({message, user}) {
        const item = document.createElement('p')
        const messageList = document.querySelector('.messageList')
        item.className = userNameList.includes(user) ? 'selfMessage' : 'newMessage'
        item.textContent = userNameList.includes(user) ? `${message}`: ` ${user}: ${message}`
        messageList.appendChild(item)
        messageList.scrollTop = messageList.scrollHeight;
    })
}
  export { onSendListener,onIncomingMessageListener}
