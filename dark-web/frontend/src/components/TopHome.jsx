import React, { useState } from 'react'
import Site from './Site'
import Arrow from "../images/arrow.png"

function TopHome() {

  return (
    <div>
        <div className='showcase'>
            <div className='showcase-left'>
                <div className='site site-one'></div>
                <div className='site site-one'></div>
            </div>
            <div className='showcase-right'>
                <div className='site site-one'></div>
                <div className='site site-one'></div>
            </div>
        </div>
        <div className='home-main'>
            <h1 className='home-title'>Eine <span>Website</span>, die <br/> verkauft</h1>
            <h2 className='home-sub-title'>Verbessere deinen <span>Umsatz</span> mit einer <br/> neuen <span>Website</span>, die Kunden überzeugt.</h2>
            <button className='cta'>Kontakt</button>
        </div>
        <Site />
        <img src={Arrow} className="arrow"></img>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 200" className='wave'><path d=" M -15 111 Q 156.606 173.758 248 174 C 339.394 174.242 419.697 106.061 517 76 C 570.733 59.4 602 54.788 676 88 C 750 121.212 774.987 98.774 827 88 C 878.788 77.273 899.81 73.451 959 109 C 1019.697 145.455 1063.372 192.192 1132 182 C 1190.722 173.279 1195.455 146.97 1265 88 C 1372.891 -3.484 1480.624 25.342 1568 76 C 1630.303 112.121 1625.758 113.636 1697 124 Q 1754.469 132.36 1962 68 L 2005 250 Q 1194.909 292.485 1102 297 Q 1009.091 301.515 -56 295 L -15 111 Z " id="Strecke" fill="#F4F1DE" vector-effect="non-scaling-stroke" stroke-miterlimit="3"/></svg>
        <div className='stats-widget'></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 200" className='wave-2'><path d=" M -15 111 Q 156.606 173.758 248 174 C 339.394 174.242 419.697 106.061 517 76 C 570.733 59.4 602 54.788 676 88 C 750 121.212 774.987 98.774 827 88 C 878.788 77.273 899.81 73.451 959 109 C 1019.697 145.455 1063.372 192.192 1132 182 C 1190.722 173.279 1195.455 146.97 1265 88 C 1372.891 -3.484 1480.624 25.342 1568 76 C 1630.303 112.121 1625.758 113.636 1697 124 Q 1754.469 132.36 1962 68 L 2005 250 Q 1194.909 292.485 1102 297 Q 1009.091 301.515 -56 295 L -15 111 Z " id="Strecke" fill="#F4F1DE" vector-effect="non-scaling-stroke" stroke-miterlimit="3"/></svg>
    </div>
  )
}

export default TopHome
