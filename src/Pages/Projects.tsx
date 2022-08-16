import { MouseEventHandler, useState } from 'react'
import css from '../CSS/Projects.module.css'
import { Btn } from './Home';
import { useEffect } from 'react';
import { Popup } from '../Components/Popup';
interface GitApi
{
    homepage:any,
    name:string,
    url:string,
    description?:string,
}

const checkDefined = (thing: any) => {
    //any fordi gjennbruk #save the enviroment
    //NVM selvom denne checken bekrefter at tingen ikke er undefined så klager fremdeles typescript LMAO EGIJNAOSERSGHNAISRNHIOL
    if (typeof thing === 'undefined')
        return false;
    else return true;
}

const RenderProjects: React.FC<GitApi> = (props) => {
    const [active, setActve] = useState(false);
    const style = {
        border:`solid 1px rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    }
    // console.log('lol')
    return <div className={css.ProjectWrap} style = {style} onClick={()=>{setActve(!active);}}>
        <h2>{props.name}</h2>
        {active && 
        <>
        <p>{props.description}</p>
        <a href = {props.url}>Git link</a>
        </>
        }
    </div>
}

export const Projects = () => {
    const [data, setData] = useState<undefined|GitApi[]>();
    // const [mousepos, setMousepos] = useState<{x:number, y:number}>({x:0, y:0})
    const shouldRender = checkDefined(data);
    useEffect(() => {
        // const url = 'https://api.github.com/users/hakonelias/repos';
        const url = 'https://api.github.com/users/hakonelias/repos'
        fetch(url).then(res => res.json()).then(fin => {setData(fin)})
    }, [])
    return <>
    {/* <div className={css.mouseAnim} style = {{top:mousepos.y, left:mousepos.x}}></div> */}
    {/* <div className={css.aWrap} onClick={(e) => {
        // setMousepos({x:e.clientX-16, y:e.clientY-16})
    }}> */}
    <Popup>
        <h1>Prosjekter:</h1>
        <div className={css.mainWrap}>
        {shouldRender && data!.map((data, index) => {return <RenderProjects
         homepage={data.homepage}
         url={data.url}
         name={data.name}
         description={data.description}
         />
         })}
         </div>
         </Popup>
        {/* <button onClick={()=>{console.log(fetchProjects())}}>Test fetch</button> */}
    {/* </div> */}
    </>
}