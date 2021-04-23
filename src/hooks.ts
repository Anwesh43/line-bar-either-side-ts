import {
    CSSProperties,
    useEffect, useState 
} from 'react'
const delay : number = 20 
const scGap = 0.02 

const sinify : Function = (scale : number) : number => Math.sin(scale * Math.PI)
const maxScale : Function = (scale : number, i : number, n : number) : number => Math.max(0, scale - i / n)
const divideScale : Function = (scale : number, i : number, n : number) : number => Math.min(1 / n, maxScale(scale, i, n)) * n 


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

export const useStyle = (w : number, h : number, scale : number) => {
    const lineSize : number = Math.min(w, h) / 4 
    const x : number = w / 2 
    const y : number = h / 2
    const barW : number = Math.min(w, h) / 20 
    const barH : number = lineSize 
    const position = 'absolute'
    const sf : number = sinify(scale)
    const background : string = '#01579B'
    return {
        parentStyle() : CSSProperties {
            const left : string = `${x}px`
            const top : string = `${y}px`
            return {
                position, 
                left, 
                top
            }
        },

        lineStyle() : CSSProperties {
            const a : number = lineSize * divideScale(sf, 0, 2)
            const left : string = `${a / 2}px`
            const width : string = `${a}px`
            const height : string = `${a}px`
            return {
                position,
                left, 
                background,
                width, 
                height 
            }
        },
        
        barStyle(i : number) : CSSProperties {
            const a : number = barH / (i + 1)
            const b : number = -lineSize / 2 + (lineSize - barW) * i 
            const left : string = `${b}px`
            const width : string = `${barW}px`
            const top : string = `${-a}px`
            const height : string = `${b}px`
            return {
                position,
                left, 
                top, 
                width, 
                height, 
                background

            }
        },

        buttonStyle() : CSSProperties {
            const display : string = scale == 0? 'block': 'none'
            return {
                display
            }
        } 
    }
}