interface Props{
    prevPage: ()=>void,
    nextPage: ()=>void,
}

const BrowserCheck = ({nextPage}: Props) => {
    const randonInt = (from:number, to:number):number => {
        const randFloat = Math.random()
        return Math.floor( randFloat * ( to - from ) ) + from
    }
    setTimeout(()=>{
        nextPage()
    },randonInt(3000,8000))
    return (
        <div>
            <h1>Hold up...</h1>
            <p>
                We are verifying your browser. <br />
                This takes about 5 seconds.
            </p>
        </div>
    )
}

export default BrowserCheck
