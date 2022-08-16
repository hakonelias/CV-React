import Gulla from './pictures/Gulla.png'
import Håkon from './pictures/håkon.jpg' //den følelsen når du er jpeg
import Kirill from './pictures/Kirill.png'
import Pinne from './pictures/pinne.png'
import css from './covid.module.css'
import { useState } from 'react'
interface imgProps {
    image:string
    name:string
    sykdom: string[]|undefined;
}

const checkUndefined = (property:any) => {
    if (property === undefined)
        return true;
    return false;
}

const RenderAids:React.FC<{sykdom:string[]|undefined, name:string, shouldRender:boolean}> = (props) => {
    if (props.shouldRender)
    {
        if (props.sykdom)
        {
            return <><p>{props.name} Har: </p>
            <ul>
            {props.sykdom.map((navn => {return <li>{navn}</li>}))}
            </ul>
            </>
        }
        else return <p>{props.name} har ikke cancer</p>
    }
    else return <></>
}

const ImgBtn:React.FC<imgProps> = (props) => {
    const hasDisase = checkUndefined(props.sykdom);
    const [shouldRedner, setSHouldRender] = useState(false)
    return <div className={css.person} onClick={()=>{setSHouldRender(!shouldRedner)}}>
        <img src = {props.image} alt = 'Person'/>
        <p>{props.name}</p>
        <RenderAids name={props.name} shouldRender={shouldRedner} sykdom={props.sykdom} />
    </div>
}

export const CovoidCheck = () => {
    return <div className={css.aWrap}>
        <h1>Doctor checkup 2022</h1>
        <div className={css.bWrap}>
        <ImgBtn image = {Gulla} name='Gulla' sykdom = {['Covid', 'klamydia', 'solid røykesug']}/>
        <ImgBtn image = {Håkon} name='Håkon' sykdom = {['solid ADHD', 'crippling angst', 'Nikotinavhengighet']}/>
        <ImgBtn image = {Kirill} name='Kirill' sykdom = {['russiske gener', 'sadboi2022-Syndrom', 'villighet til å bo i polen']}/>
        <ImgBtn image = {Pinne} name='Pinne' sykdom = {['Autisme', 'fremdeles lovable', '50% nikotinavhengighet']}/>
        </div>
    </div>
}