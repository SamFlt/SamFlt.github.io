import './App.css'
import Card from './Card'

function ThreadLine(day: number) {
  const date = new Date();
  const currentDay = date.getDate()
  if(day == 24) {
    return (
      <></>
    )
  }
  if(day < currentDay) {
    return(<>
      <div className="threadLine full"></div>
    </>)
  }
  if(currentDay == day) {
    return (<>
      <div className="threadLine full"></div>
      <div className="threadLine dotted"></div>
      <div className="threadLine full"></div>     
    </>)
  } else if (day > currentDay) {
    return (<>
      <div className="threadLine dotted"></div>     
    </>)
  }
}

function App() {

  let elements = []
  for(let i = 1; i < 25; ++i) {
    elements.push(Card(i, "A poem"))
    elements.push(ThreadLine(i))
    
  }
  return (
    <>
      <div className='snow'>
      </div>
      {elements}

    </>
  )
}

export default App
