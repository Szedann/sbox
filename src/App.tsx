import React, { useState, useEffect } from 'react'
import { firebaseAnalytics } from './analytics';

import './css/style.css'
import background from './images/bg.jpg'

import Navbar from './components/Navbar';
import Start from './components/Start';
import BrowserCheck from './components/BrowserCheck';
import Captcha from './components/Captcha';
import Hack from './components/Hack';
import Key from './components/Key';

const App : React.FC = () => {

  const [page, setPage] = useState(0)
  const [nextPage, prevPage] = [
    ()=>{setPage(page=>{return page+1})},
    ()=>{setPage(page=>{return page-1})}
  ]

  const renderSwitch = (pg:number)=>{
    switch(pg){
      case 0: { return <Start nextPage={nextPage} prevPage={prevPage} /> }
      case 1: { return <BrowserCheck nextPage={nextPage} prevPage={prevPage} /> }
      case 2: { return <Captcha nextPage={nextPage} prevPage={prevPage} /> }
      case 3: { return <Hack nextPage={nextPage} prevPage={prevPage} /> }
      case 4: { return <Key nextPage={nextPage} prevPage={prevPage} /> }
    }
  }

  return (
    <>
      <img src={background} alt="bg" className="website-background" />
      <Navbar />
      <main>
        {renderSwitch(page)}
      </main>
    </>
  );
}

export default App;
