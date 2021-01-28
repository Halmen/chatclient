
import App from './components/App'
import { onSendListener, onIncomingMessageListener} from './services/ws'

window.addEventListener('load', () => {
  document.getElementById('main').innerHTML = App();
  onSendListener()
  onIncomingMessageListener()
})
