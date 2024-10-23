import './App.css'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'

eruda.init()

function App() {
  return (
    <>
        <button onClick={() => WebApp.showAlert("Alert!")}>
            Show Alert
        </button>
    </>
  )
}

export default App
