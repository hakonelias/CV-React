import { useState } from 'react';
import { Popup } from '../Components/Popup';
import css from '../CSS/Home.module.css'; //Trenger en global css for gjenbruk av css husk pls
import { CovoidCheck } from '../saedLokShiet/CovidCheck';
import { About } from './About';
import { Contact } from './Kontakt';
import { Projects } from './Projects';

interface Props
{
    mobile:string
}

interface btnProps
{
    name:string,
    path:JSX.Element,
    color:number[] //i rgb format i guess
}

const checkClass = () => {}

const ClosePop:React.FC<{setState:any}> = (props) => {
    const styles = {

    }
    return <><div className={css.closeBtn} style = {styles} onClick={()=>{props.setState(false)}}>Close</div></>
}

const checkMobile = () => {
    if (window.innerWidth < 800) 
        return true;
    return false; //
  }

const Btn: React.FC<btnProps> = (props) => {
    const style = {
        border:`solid 1px rgb(${props.color[0]},${props.color[1]},${props.color[2]})`
    }
    const [pop,setPop] = useState(false);
    if (checkMobile())
    return <>
        {pop && props.path}
    {pop && <ClosePop setState={setPop}/>}
    <div className={css.buttonMobile} style = {style} onClick={()=>{setPop(!pop)}}>
        <p>{props.name}</p>
        </div>
    </>

    //PC - helvete rydd opp i dette gjør css classen om til string som endrer på seg elns
    return <>
    {pop && props.path}
    {pop && <ClosePop setState={setPop}/>}
    <div className={css.button} style = {style} onClick={()=>{setPop(!pop)}}>
        <p>{props.name}</p>
        </div></>
}

export const Home = () => {
    return <div className={css.wrapper}>
        <h1>Håkon Stensvoll</h1>
        {checkMobile() && <><p>Mobil edition</p><p>Sorry jeg brukte ikke langt tid på mobilversjonen</p></>}
        <div className={checkMobile() ? css.mobileWrap : css.bWrap}>
        <Btn name = "Prosjekter" path = {<Projects />} color={[112, 34, 34]}/>
        <Btn name = "Kontakt" path = {<Contact />} color={[34, 112, 95]}/>
        <Btn name = "Om meg" path = {<About />} color={[112, 81, 34]}/>
        <Btn name = "Covid2022" path = {<CovoidCheck />} color={[112, 34, 34]}/>
        </div>
    </div>
}

export {Btn}




