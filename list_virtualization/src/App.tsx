
import { useState } from 'react'
import './App.css'

const items = Array.from({length: 10000}, (_, index) => `Item ${index + 1}`);
function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 40;
  const containerHeight = 400;
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }

  const overscan = 3;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount + overscan * 2, items.length);
  const totalHeight = items.length * itemHeight;
  const topHeight = startIndex * itemHeight;
  const bottomHeight = totalHeight - endIndex * itemHeight;

  return (
    <>
      <h3>List Virtualizartion</h3>
      <p>Start Index : {startIndex}</p>
      <p>End Index : {endIndex}</p>
       <div style={{
         height: containerHeight,
         overflowY: "auto",
         border: "1px solid black"
        }} onScroll={handleScroll}>
         <div style={{height: topHeight}}/>
        {
          items.slice(startIndex, endIndex).map((item, index) => (
            <div key={startIndex + index} style={{height: itemHeight, boxSizing: "border-box"}}>
              {item}
            </div>
          ))
        }
       <div style={{height: bottomHeight}}></div>
       </div>
      
    </>
  )
}

export default App
