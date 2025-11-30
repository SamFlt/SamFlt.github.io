
import './Card.css'
import { useState } from 'react';
import {getDay} from './Content'

function DayCircle(day: number) {
  return (
    <>
      <div className="circle">{day}</div>
    </>
  )
}

function Card(day: number) {
  const date = new Date();
  let currentDay = date.getDate()
  if (import.meta.env.DEV) {
    currentDay = 1;
    date.setMonth(11)
  }
  const dayCircle = DayCircle(day)
  let content = getDay(currentDay)
  
  if (currentDay < day || date.getMonth() != 11) {
    return (
      <>
        <div className="card gift soon">
          {dayCircle}
        </div>        
      </>
    )
  } else if (day == currentDay) {

    let [isOpenened, doOpen] = useState(false)
    if (!isOpenened) {
      return (<>
        <div className="card gift">
          {dayCircle}
          <div className='contentWrapper'>
            <div><button onClick={() => doOpen(true)}>Ouvre-moi !</button></div>
            <div className='content'></div>
          </div>
        </div>
      </>)
    } else {

      return (
        <>
          <div className="card opened">
            {dayCircle}
            <div className="content">
              {content}

            </div>
          </div>
        </>
      )
    }

  } else {
    return (
      <>
        <div className="card  passed">
          {dayCircle}
           <div className="content">
              {content}

            </div>
        </div>
      </>
    )
  }
}

export default Card
