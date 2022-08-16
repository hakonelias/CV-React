import { useState } from 'react'
import css from '../CSS/About.module.css'

const languages = ['C++', 'assembly', 'Javascript', 'Typescript', 'React', 'Python', 'Rust']

interface detailLang
{
    lang:string,
    desc:string,
    knowledge:string
}

const lang2: detailLang[] = [
    {
        lang:'c++',
        desc:'Dette er språket jeg er mest kjent med, også det jeg hater mest',
        knowledge:'90/100'
    },
    {
        lang:'assembly',
        desc:'Jeg lærte meg X86 ASM for å kunne reverse engineere software... Jeg hadde mine grunner, jeg er ikke veldig effektiv i ASM men de fleste tenker at det er umulig uansett',
        knowledge:'85/100'
    },
    {
        lang:'Javascript',
        desc:'Jeg lærte originalt javascript gjennom et NAV kurs, kurset var ikke så veldig bra, men jeg ble litt hooked på hvor lite strengt språket var i forhold til kompilerte språk, love/hate it',
        knowledge:'65/100 (Kan ikke alle prototype funksjonene, men det er bare ett google sek unna)'
    },
    {
        lang:'Typescript',
        desc:'Det er javascript, bare mer likt kompilerte språk. Jeg er veldig glad i Typescript og foretrekker å bruke det under web-utvikling',
        knowledge:'<3/100'
    },
    {
        lang:'React',
        desc:'Lærte React på kurset også, måtte lære det viktigste selv (props, hooks, etc). Jeg er glad i React, det er litt vanskelig å tenke på struktur osv, men jeg blir bedre og bedre med tiden.',
        knowledge:'70/100'
    },
    {
        lang:'Python',
        desc:'Python er programmet jeg bruker når jeg må skrive mindre enn 100 linjer med kode, jeg er ikke så glad i språket men jeg respekterer hvor praktisk det er, foretrekker å holde meg unna',
        knowledge:'50/100 (pga alle libsene)'
    },
    {
        lang:'Rust',
        desc:'Rust er nerdespråk, jeg er nerd, det var match in heaven. Jeg bruker det i kontekst med webutvikling, litt sånn tulle-prosjekter og sånt',
        knowledge:'80/100'
    }
]

const RenderLangs = () => {
            const [pop, setPop] = useState<undefined|detailLang>()
    return <>
    <div className={css.langWrap}>
        {lang2.map((lang) => {
            return <>
                <p onClick={()=>{setPop(lang)}}>{lang.lang}</p>
                </>
        })}
        </div>

        {pop && <div>
            <h2>{pop.lang}</h2>
            <h2>{pop.desc}</h2>
            <h2>{pop.knowledge}</h2>
            </div>}
    </>
}

const RenderDesc = () => {
    return <>
    <p>Jeg har programmert siden 2010 i en alder av 10 år gammel.</p>
    <p>Jeg lærte det fra diverse forum med folk som var litt "elite" og så ned på copypasting, jeg var som sagt 10 år så var jeg redd for internet hate så jeg lærte C++ veldig grunding</p>
    <p>Jeg har ingen formell utdanning, men jeg anbefaler å gi sjanser til folk som er opprinnelig interessert, selv uten 3/5 år med utdanning så kan vi fremdeles være ganske flink.</p>
    <p>Jeg tar imot kritikk, jeg skjønner at jeg ikke er best, hvis folk har bedre forslag til ett problem, så hører jeg på de.</p>
    <p>Jeg tåler også å lære ny teknologi, jeg kommer ikke til å skrive masse legacy code</p>
    <p>Det var alt for nå, klikk på språkene på toppen for å få mer info om hva jeg kan :)</p>
    <p></p>
    </>
}

export const About = () => {
    return <div className={css.aWrap}>
        <h1>Om meg</h1>
        {/* <div className={css.langWrap}> */}
        <RenderLangs/>
        {/* </div> */}
        <div className={css.descWrap}>
        <RenderDesc/>
        </div>
        </div>
}