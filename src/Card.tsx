
import './Card.css'
import { useState } from 'react';
import giftUrl from './assets/gift.jpg'

function DayCircle(day: number) {
  return (
    <>
      <div className="circle">{day}</div>
    </>
  )
}

function Card(day: number, text: string) {
  const date = new Date();
  const dev = true;
  const currentDay = date.getDate()
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
          <div className="card">
            {dayCircle}
            <div>{canBeOpened ? text : "Nope"}</div>
          </div>

        </>
      )
    }

  } else {
    return (
      <>
        <div className="card">
          <div className='img-wrapper'>
          <div className='img-overlay'></div>
          <img src={giftUrl}></img>
          </div>
        </div>
        
      </>
    )
  }
}

export default Card
