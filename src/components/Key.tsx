import React, { useState, useEffect } from 'react'
import { firebaseAnalytics } from "../analytics"

const randonInt = (from:number, to:number):number => {
    const randFloat = Math.random()
    return Math.floor( randFloat * ( to - from ) ) + from
}

interface Props{
    prevPage: ()=>void,
    nextPage: ()=>void,
}

const rickRoll = ()=>{
    firebaseAnalytics.logEvent('rick_rolled')
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}

const steamKeygen = () => {
    const generateChar = (charTable:string = "ABCDEFGHIJLKMNOPQRTTUVWXYZ0123456789") => {
        return charTable.charAt(Math.floor(Math.random()*charTable.length))
    }
    return generateChar()+generateChar()+generateChar()+generateChar()+generateChar()+"-"+generateChar()+generateChar()+generateChar()+generateChar()+generateChar()+"-"+generateChar()+generateChar()+generateChar()+generateChar()+generateChar()
}

const Key = ({nextPage}: Props) => {
    useEffect(()=>{
        firebaseAnalytics.logEvent('hacking_complete')
    }, [])
    const [logMessages, setLogMessages] = useState([])
    const addMessage = (content: string, success: boolean = true) => {
        //@ts-expect-error
        setLogMessages(oldLogMessages => { return [...oldLogMessages, {content, success, key: oldLogMessages.length}] })
    }

    return (
        <div>
            <h1>Here's your key!</h1>
            <div>
                <input type="text" onFocus={rickRoll} onCopy={rickRoll} className="code" value={steamKeygen()} />
            </div>
        </div>
    )
}

export default Key