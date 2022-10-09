import qrcode from './assets/image-qr-code.png'

import './App.css'

function App() {
  return (
    <div className='card'>
        <div className='wrapper'>
          <img className='qrcode' src={qrcode} alt="" />
            <div className='texts'>
              <h2>Improve your front-end skills by building projects</h2>
              <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>
  )
}

export default App
