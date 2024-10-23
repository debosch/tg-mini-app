import './App.css'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import { useEffect } from 'react'

eruda.init()

function App() {
  useEffect(() => {
    console.log(WebApp.initDataUnsafe.user);
  }, []);

  return (
    <>
        <button onClick={() => WebApp.showAlert("Alert!")}>
            Show Alert
        </button>
    </>
  )
}

export default App
