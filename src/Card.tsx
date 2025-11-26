
import './Card.css'
import { useState } from 'react';


function DayCircle(day: number) {
  return (
    <>
      <div className="circle">{day}</div>
    </>
  )
}

function Card(day: number, text: string) {
  const date = new Date();
  let dev = false;
  let currentDay = date.getDate()
  if (import.meta.env.DEV) {
    dev = true;
    currentDay = 10;
  }
  const dayCircle = DayCircle(day)
  const canBeOpened = dev || (date.getMonth() == 12 && currentDay >= day)
  if (day < currentDay) {
    return (
      <>
        <div className="card">
          {dayCircle}
          <div>{canBeOpened ? text : "Nope"}</div>
        </div>
        
      </>
    )
  } else if (day == currentDay) {

    let [isOpenened, doOpen] = useState(false)
    if (!isOpenened) {
      return (<>
        <div className="card gift">
          {dayCircle}
          <div><button onClick={() => doOpen(true)}>Ouvre-moi !</button></div>
        </div>
      </>)
    } else {
      return (
        <>
          <div className="card gift">
            {dayCircle}
          </div>
        </>
      )
    }

  } else {
    return (
      <>
        <div className="card gift">
          {dayCircle}
        </div>

      </>
    )
  }
}

export default Card
