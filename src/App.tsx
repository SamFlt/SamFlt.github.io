import './App.css'
import Card from './Card'
import christmasTreeUrl from './assets/christmas-tree.webp'

import { useState, useEffect } from "react";


function diff(d1: Date, d2: Date) {
  return { days, hours, minutes, seconds };
}

function diffStr(t: number) {
  let diff = t - new Date().getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);
// const diffDay  = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return hours + "h" + minutes + "m" + seconds + "s"
}

function Timer({ targetDate }: { targetDate: Date }) {

  let t = targetDate.getTime()

  const [dateStr, setDateDiff] = useState(diffStr(t));

  useEffect(() => {
    setInterval(() => {
      setDateDiff((_) => diffStr(t));
    }, 1000);
  }, []);

  return (
    <div>
      <label> {dateStr} </label>
    </div>
  );
}

function ThreadLine({ day }: { day: number }) {  
  const date: Date = new Date();
  const dateNextDay: Date = new Date()
  dateNextDay.setDate(day + 1)
  dateNextDay.setHours(0, 0, 0, 0)

  
  const currentDay = date.getDate()
  if(day == 24) {
    return (
      <></>
    )
  }
  if(day < currentDay) {
    return(<>
      <div className="threadLine full"></div>
      <div className="threadLine full"></div>
      
    </>)
  }
  if(currentDay == day) {
    let timer = <Timer targetDate={dateNextDay}/>
    return (<>
      <div className="threadLine threadStart full"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      {timer}
      <div className="dot"></div>
      <div className="dot"></div>
      
      <div className="threadLine threadEnd full"></div>     
    </>)
  } else if (day > currentDay) {
    return (<>
      <div className="threadLine full"></div>
      <div className="threadLine full"></div>
         
    </>)
  }
}

function App() {

  let elements = []
  for(let i = 1; i < 25; ++i) {
    elements.push(<Card key={`card-${i}`} day={i}/>)
    elements.push(<ThreadLine key={`threadline-${i}`} day={i}/>)
  }
  return (
    <>
      <div className='snow'>
      </div>
      <h1>Le calendrier à Olivia</h1>
      {elements}

      <div id="sapin">
        <img src={christmasTreeUrl}></img>
      </div>

    </>
  )
}

export default App
