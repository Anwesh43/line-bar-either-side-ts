import React, {Component} from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const withContainer  = (Child : React.FC<any>) : React.FC<any> => {
    const {scale, start : onClick} = useAnimatedScale()
    const {w, h} = useDimension()
    const props = {
        w,
        scale, 
        h, 
        onClick 
    }
    return () => <Child {...props}/>
}

export default withContainer