import React, { useState, useEffect } from 'react'

const randonInt = (from:number, to:number):number => {
    const randFloat = Math.random()
    return Math.floor( randFloat * ( to - from ) ) + from
}

interface Props{
    prevPage: ()=>void,
    nextPage: ()=>void,
}

interface Message{
    content: string;
    success: boolean;
    key: number;
}

const Hack = ({nextPage}: Props) => {
    const [logMessages, setLogMessages] = useState([])
    const addMessage = (content: string, success: boolean = true) => {
        //@ts-expect-error
        setLogMessages(oldLogMessages => { return [...oldLogMessages, {content, success, key: oldLogMessages.length}] })
    }

    useEffect(()=>{
        addMessage('Hacking into the valve mainframe')

        setTimeout(() => {
            addMessage('attempting SQL injection...')
        }, 1000);

        setTimeout(() => {
            addMessage('SQL injection failed. (ERROR 402)', false)
        }, 5000);

        setTimeout(() => {
            addMessage('re-attempting SQL injection...')
        }, 5300);

        setTimeout(() => {
            addMessage('SQL injection attack success')
        }, 6500);

        setTimeout(() => {
            addMessage('looking for keys')
        }, 7000);

        const amount = randonInt(300, 2500)

        const amountOfFiles = randonInt(2500, 3500)

        const timeSinceFileSearch = (7050+(amount*20))*( amount/300 * amount / amount )

        for(let i = 0; i < amount; i++){
            setTimeout(() => {
                if(i === amount-1){
                    addMessage(`checked file ${i}/${amountOfFiles} - 1 key found`);
                 }else{
                    addMessage(`checked file ${i}/${amountOfFiles} - no keys found`, false)
                 }
            }, 7050+i*20*( i / 250 * i / amount ));
        }

        setTimeout(() => {
            addMessage('Found 1 key. redirecting...')
        }, timeSinceFileSearch + 250);


        setTimeout(() => {
            nextPage()
        }, timeSinceFileSearch + 2150);

    }, [])

    return (
        <div>
            <h1>Hacking valve...</h1>
            <div className="log">
                {
                    logMessages.slice().reverse().map(message=> (
                        //@ts-expect-error
                        <LogMessage key={message.key} message={message} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Hack

const LogMessage = ({message}: {message: Message}) => {
    return (
        <div className={`log-message ${message.success ? 'success' : 'error'}`}>
            {message.content}
        </div>
    )
}

