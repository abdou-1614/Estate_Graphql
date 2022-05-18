import {useRef, useEffect} from 'react'

let useClick = (handel) => {
    let domNode = useRef()
    useEffect(() => {
        let mayHandel = (e) => {
            if(!domNode.current.contains(e.target)) handel()
        }
        document.addEventListener('mousedown', mayHandel)
        return() => {
            document.removeEventListener('mousedown', mayHandel)
        }
    })
    return domNode
}

export default useClick