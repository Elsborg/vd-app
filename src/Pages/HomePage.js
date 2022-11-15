import React from 'react'
import toplogo from "../Images/VisitDenmarklogo.png";
import bottomlogo from "../Images/VisitDenmarklogo.png";
import "../HomePage.css";
import { Link } from 'react-router-dom';
import MainPage from './MainPage';

const HomePage = () => {
  return (
    <div>
    <div className='bg'>
        <div className='vertical-center'>
            <div>
           <h1 className='headline'>The land <br/> of everyday <br/> wonder</h1>
           <img className='logo' src={toplogo} alt="VisitDenamrk logo"/>
           </div>
           <Link to="/Main" >
        <button className='home-button'>explore now       <span className='arrow'> ᐳ </span>  </button>
        </Link>
        <div className='bottom-logo'>
        <img className='logo-bot' src={bottomlogo} alt="VisitDenamrk logo"/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default HomePage