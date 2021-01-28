import './InputRow.css'

const InputRow = () => (
  `<div class='inputRow'>
    <div class='userInputWrap'>
      <div class='userLabel'>User:</div>
      <input class='userNameInput' placeholder='name' autocomplete="off" maxlength="15"/> 
    </div>
    <div class='messageInputWrap'>
      <input class='messageInput' placeholder='Type message here ' autocomplete="off" maxlength="100"/>
      <button class='sendButton'>Send</button>
    </div>
  </div> `
  )

export default InputRow
