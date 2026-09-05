import './App.css'
import OTP from './component/OTP'


function App() {
  const otpSize = 5;
  return (
    <>
      <div>
        <h3>OTP - Machine Coding Question</h3>
      </div>
      <OTP otpSize={otpSize}/>
    </>
  )
}

export default App
