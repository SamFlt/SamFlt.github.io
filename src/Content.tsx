import minibiteUrl from './assets/minibite.jpg'
import penseeNoireUrl from './assets/pensee_noire.png'
import bateauIvreUrl from './assets/bateau_ivre.jpg'
import pigeonUrl from './assets/pigeon.jpg'
import motUrl from './assets/mot.png'
import vinScreenUrl from './assets/vin_conv.jpg'
import vinUrl from './assets/vino.jpg'
import itTakesTwoUrl from './assets/it_takes_two.jpg'
import salopetteUrl from './assets/salopette.jpg'
import aventurineUrl from './assets/aventurine.jpeg'
import constellationUrl from './assets/constellation.jpg'
import pleaseUrl from './assets/please.png'
import tarotUrl from './assets/tarot.png'
import acabUrl from './assets/acab.jpg'
import margotUrl from './assets/margot.webp'

import './Card.css'

import { useState } from 'react'

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
    },
    6: () => {
        let [isOpenened, doOpen] = useState(false)
        let ending = isOpenened ? <img className="imgVino" src={vinUrl} /> : <div><button onClick={() => doOpen(true)}>Veritas?</button></div>

        return (<>
            <p>In vino:</p>
            <div>
                <img className="imgVinoScreen" src={vinScreenUrl} />
                
            </div>
            <div>
            {ending}

            </div>
        </>)
    },
    7: () => {
        
        return (<>
            <iframe width="315" height="560"
                src="https://www.youtube.com/embed/D6Pkb0LSKG0?si=RfoXNNOazUOWRjFt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>

        </>)
    },
    8:  () => {
        return (<>
            <img src={itTakesTwoUrl} />
            <div>J'adore jouer avec toi !!!</div>
            <div>C'est quand qu'on finit ? 😍</div>
        </>)
    },
    9:  () => {
        return (<>
            <img src={salopetteUrl} />
            <div>Fuck Mondial Relay</div>
            <div>It's Salopette day</div>
            <div>46 ??? 😭😭😭</div>
        </>)
    },
    10: () => {
        let s = { "borderRadius": "12px" };
        let embedFdp = <iframe data-testid="embed-iframe" style={s}
            src="https://open.spotify.com/embed/track/5kdiMtCPO4pZavJcDgBthn?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        let embedBatard = <iframe data-testid="embed-iframe" style={s}
         src="https://open.spotify.com/embed/track/06cUnmAwNiDWW1NmxsizhF?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        return (<>
            <p>Aujourd'hui, que des numéros 10 dans ma team</p>
            <p>Je te laisse avec deux musiques qui ont marqué le temps que j'ai passé avec toi</p>
            <br></br>
            <br></br>
            <br></br>
            <h1>🚙</h1>
            {embedFdp}
            <br></br>
            <br></br>
            <br></br>
            <h1>🎤</h1>
            {embedBatard}
        </>)
    },
    11: () => {
        return (<>
            <p>
                Ce week-end, de câlins je vais te choyer <br></br>
                Cette soirée, passons là enmurés<br></br>
                Je veux voir tes yeux chatoyer <br></br>
                Et n'entendre que des mots doux murmurés <br></br>
                Je ferai tout pour que ton stress se disperse <br></br>
                Car de ton regarde mon âme tu transperces <br></br>
            </p>

            <p>
                J'espère que ce menhir ne rend pas fécond<br></br>
                Car contrairement à César<br></br>
                Je veux me noyer dans ton Rubis con<br></br>
                Ma jolie dame des arts<br></br>
            </p>

            <p>
                Je me sens comme une fraude : titillante et impolie<br></br>
                Devant une émeraude si brillante et polie<br></br>
                De ma grotte tu m'as sorti<br></br>
                Malgré toutes mes strates de roche <br></br>
                Donc fouille et excave mes poches <br></br>
                Pour qu'on se rapproche, qu'on soit assorti <br></br>
            </p>

            <p></p>
            <img src={aventurineUrl} />
        </>)
    },
    12: () => {
        return (<>
            <img src={constellationUrl} />
            <div>J'ai adoré la nuit des étoiles avec toi et tes potes</div>
            <div>J'ai aimé notre sortie planétarium</div>
            <br></br>
            <div>On retourne voir les étoiles quand il fait beau ? </div>
            <img src={pleaseUrl} />
        </>)
    },
    13: () => {
        return (<>
            <img src={acabUrl} />
            <div>Joyeux ACAB day !!!</div>
        </>)
    },
    14: () => {
        return (<>
            <div>Tu me tires les cartes bientôt ? ✨✨✨</div>
            <img src={tarotUrl} />
        </>)
    },
    15: () => {
        return (<>
            <img src={margotUrl} />
            <div>Elle ? C'est juste Margaux</div>
            <div>Pourquoi elle fait cette là ?</div>
            <div>Elle vient juste de me voir (ou de voir un homme je sais pas)</div>
        </>)
    },
    16: () => {
        return (<>
            <div>Aujourd'hui pas besoin de mots, juste que tu mettes un casque</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GOKN3hh6mGE?si=dADNJfE4z0Of00hG" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

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