import minibiteUrl from './assets/minibite.jpg'
const days: Record<number, Function> = {
    1: () => {
        return (<>
            <p>
                Coucou mimi !<br/>
                Bienvenue dans ton petit calendrier de l'avent customisé par mes soins. <br/>
                J'espère que tu apprécies le site qui rendrait fous tous les graphistes et web dev du monde.<br/>
                P.S: pour tes beaux yeux seulement
            </p>
            <p>
                Pour ce premier jour, je te laisse admirer la première fois où tu m'as fait rire
            </p>
            <img src={minibiteUrl}/>
        </>)   
    }
}


export function getDay(day: number) {
   if( day in days) {
    return days[day]()
   } else {
    return <></>
   }
}