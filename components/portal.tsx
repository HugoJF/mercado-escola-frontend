import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import {NextPage} from "next";

const SELECTOR = '#modal';

export const Portal: NextPage = ({children}) => {
    const ref = useRef<Element | null>()

    useEffect(() => {
        ref.current = document.querySelector(SELECTOR)
    }, [SELECTOR])

    return ref.current ? createPortal(children, ref.current) : null
}
