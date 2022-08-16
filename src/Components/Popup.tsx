import css from '../CSS/Popup.module.css'

export const Popup:React.FC<{children:any}> = (props) => {
    return <div className={css.aWrap}>{props.children}</div>
}