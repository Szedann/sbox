import React, { useEffect } from 'react'
import { firebaseAnalytics } from "../analytics"


interface Props{
    prevPage: ()=>void,
    nextPage: ()=>void,
}

const Start = ({nextPage}:Props) => {
    useEffect(()=>{
        firebaseAnalytics.logEvent("homepage_visited")
      }, [])
    return (
        <div>
            <h1>Generate a key</h1>
            <div className="btn" onClick={nextPage}>Generate</div>
        </div>
    )
}

export default Start
