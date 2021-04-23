import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const withContainer = (Child : React.FC<any>) : React.FC<any> => {
    return () => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const props = {
            w, 
            h, 
            scale, 
            onClick 
        }
        return (
            <>
                <Child {...props}></Child>
            </>
        )
    }
}
export default withContainer 