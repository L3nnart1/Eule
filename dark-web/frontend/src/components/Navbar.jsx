import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='nav'>
        <div className='nav-txt-wrapper'>
            <h5 className='nav-txt'>Warum</h5>
            <h5 className='nav-txt nav-txt-two' onClick={() => navigate("/about")}>Über mich</h5>
        </div>
        <h5 className='nav-logo' onClick={() => navigate("/")}>Logo</h5>
      <button className='kontakt'>Kontakt</button>
    </div>
  )
}

export default Navbar
