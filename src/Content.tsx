import minibiteUrl from './assets/minibite.jpg'
import penseeNoireUrl from './assets/pensee_noire.png'
import bateauIvreUrl from './assets/bateau_ivre.jpg'
import pigeonUrl from './assets/pigeon.jpg'
import motUrl from './assets/mot.png'

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
    },
    2: () => {
        return (<>
            <img src={penseeNoireUrl} />
            <p>
                Première photo d'une pensée<br />
                Avant le premier pas qui t'a fait avancé <br />
                Vers l'endroit où nos regards ont dansé
            </p>

        </>)
    },
    3: () => {
        return (<>
            <img src={bateauIvreUrl} />


        </>)
    },
    4: () => {
        return (<>
            <img src={pigeonUrl} />
            <p>Me suis fait chier dessus</p>
        </>)
    },
    5: () => {
        return (<>
            <img src={motUrl} />
            <p>25/07/2025</p>
            <p>❤️</p>
            
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