import {
    useEffect, useState 
} from 'react'
const delay : number = 20 
const scGap = 0.02 

export const useAnimatedScale : Function = () => {
    const [scale, setScale] : [number, Function] = useState(0)
    const [animated, setAnimated] : [Boolean, Function] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (scale > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay) 
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] : [number, Function] = useState(window.innerWidth)
    const [h, setH] : [number, Function] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {}
        }
    })
    return {
        w, h
    }
}