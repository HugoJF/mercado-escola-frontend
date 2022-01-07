import {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import {NextPage} from "next";

const SELECTOR = '#modal';

export const Portal: NextPage = ({children}) => {
    const [mounted, setMounted] = useState(false);
    const ref = useRef<Element | null>()

    useEffect(() => {
        ref.current = document.querySelector(SELECTOR)
        setMounted(true)
    }, [SELECTOR])

    return ref.current && mounted ? createPortal(children, ref.current) : null
}
