
import './App.css'
import Accordion from './component/Accordian'
import { AccordianData } from '../data'

function App() {


  return (
    <>
      {
        AccordianData.map((item) => (
          <Accordion
            title={item.title}
            description={item.description}
            key={item.id}
          />

        ))
      }
    </>
  )
}

export default App
