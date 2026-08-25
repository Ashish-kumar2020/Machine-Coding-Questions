
import { useState } from 'react'
import './App.css'
import StatRating from './component/StarRating'

function App() {
    const [starsCount,setStarsCount] = useState(5);

  return (
    <>
      <h1>Star Rating Machine Coding</h1>
      <StatRating starsCount={starsCount}/>
    </>
  )
}
export default App
