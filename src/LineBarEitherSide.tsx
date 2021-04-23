import React from 'react'
import {useStyle} from './hooks'
import withContainer from './withContainer'
interface LineBarProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function
}


const LineBarEitherSide : React.FC<LineBarProps> = (props : LineBarProps) => {
    const {w, h, scale, onClick} = props 
    const {lineStyle, parentStyle, barStyle, buttonStyle} = useStyle(w, h, scale)
    return <div style = {parentStyle()}>
        <button onClick = {() => onClick()} style = {buttonStyle()}>
            Coming From withContainer
        </button>
        {[0, 1].map((i : number) => (<div key = {`bar_${i}`} style = {barStyle(i)}/>))}
        <div style = {lineStyle()}></div>
    </div>   
}

export default withContainer(LineBarEitherSide)