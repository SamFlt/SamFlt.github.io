import minibiteUrl from './assets/minibite.jpg'
import penseeNoireUrl from './assets/pensee_noire.png'
import bateauIvreUrl from './assets/bateau_ivre.jpg'

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
            <p>
                Première escale, premier port <br />
                Stress dans la cale et incertitude à la <em>bar</em> <br />
                Quand une voile noire à tribord <br />
                Est arrivée avec un remous de retard <br />
                <br />
                Papillon de lumière à un enterrement <br />
                Ma mère est restée pure, mon regard absorbé entièrement<br />
                <br />
                Dans mon dos le vif de tes serres <br />
                Sur un bateau ivre j'ai rencontré une sirène <br />
                Sous la tempête ai posé mon pied à terre <br />
                Se sont ecartées les brumes de mes peines <br />
                <br />
                On a navigué sous la pluie <br />
                Jusqu'a retrouver ton rocher lapis lazuli <br />
                À ce moment nos regards se sont embrasées <br />
                À nos doutes se turent <br />
                On a repris la mer quand on s'est embrassé <br />
            </p>
            <p>
                <strong>KISS COUNT: (+) 1</strong>
            </p>

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