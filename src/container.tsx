import React, {Component} from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import LineBarEitherSide from './LineBarEitherSide'



const Container : React.FC<any> = (props: any) => {
    const {scale, start : onClick} = useAnimatedScale()
    const {w, h} = useDimension()
    const lineBarProps = {
        w, 
        h, 
        scale, 
        onClick
    }
    return <LineBarEitherSide {...lineBarProps}></LineBarEitherSide>
}

export default Container