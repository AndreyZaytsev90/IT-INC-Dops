import {useEffect, useState} from "react";

/**
 * Этот хук меряет ширину экрана и мы его будем использовать для бургера
 */

export function useWindowSize(){
    const [windowSize, setWindowSize] = useState(0)
    useEffect(()=> {
        function handleResize(){
            setWindowSize(window.innerWidth) //записывает размеры в стэйт
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
}