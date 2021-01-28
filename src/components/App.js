import './App.css'
import MessageList from './MessageList/MessageList'
import InputRow from './InputRow/InputRow'

const App = () => {
  return(
    `<div class='app'>
          ${MessageList()}
          ${InputRow()}
      </div>`
    )}

export default App
