import React, {Component} from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const withContainer  = (component : React.FC<any>) => {
    const {scale, start : onClick} = useAnimatedScale()
    const {w, h} = useDimension()
    const props = {
        w,
        scale, 
        h, 
        onClick 
    }
    return <Component {...props}/>
}

export default withContainer