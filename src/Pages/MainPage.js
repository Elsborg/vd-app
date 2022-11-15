import React from 'react'
import "../MainPage.css"
import danishcousine from "../Images/danishcousine.png";
import aros from "../Images/aros.png";
import outdoor from "../Images/outdoor.png"
import nyhavn from "../Images/nyhavn.png"
import cph from "../Images/cph.png"
import aarhus from "../Images/aarhus.png"
import odense from "../Images/odense.png"
import aalborg from "../Images/aalborg.png"
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
        <h2 className='heading'>
        Welcome to Denmark, the <br/>
        Land of Everyday <br/>
        Wonder
        </h2>
        <p className='text'>
        Get ready for simple pleasures and unexpected delights. We're here to make your visit to Denmark the most wonder-full experience. Before you pack your bags be sure to check out all of our updates on safe travel to Denmark. Ready? Let’s get exploring.   
        </p>
    

        <div className='text-bg'>
            <p className='box-text'>Sooo... what do you want to do in Denmark?</p>
        </div>

        <Link to="/Cousine">
        <div id="cover">
            <img src={danishcousine} alt="Open faced sandwich" />
            <p className='centeredLeft'>Danish Cousine</p>
            
            <img src={aros} alt="Aros Museum"/>
            <p className='centeredRight'>Attractions</p>
            <img src={outdoor} alt="Rebild National Park"/>
            <p className='bottomLeft'>Activities</p>
            <img src={nyhavn} alt="Nyhavn"/>
            <p className='bottomRight'>Events</p>
        </div>
        </Link>

        <div className='city-container'>
        <h2 className='heading'>The Danish Big Four</h2>
        <p className='text'>Small is beautiful, especially when it comes to our Danish cities. And because our four biggest ones are cosy and easy to explore, they're great places to get up close to Danes in their natural habitats!</p>

        <img className='city-img' src={cph} alt="Nyhavn" />
        <h2 className='heading'>Copenhagen</h2>
        <p className='text'>So clean you can swim in the harbour and go everywhere by bike. Our capital is pretty special.</p>

        <img className='city-img' src={aarhus} alt="Mejlgade" />
        <h2 className='heading'>Aarhus</h2>
        <p className='text'>Aarhus is nestled by beaches, forests and national parks. Oh, and it’s a cultural hotspot too.</p>
        
        <img className='city-img' src={odense} alt="Odense gågade" />
        <h2 className='heading'>Odense</h2>
        <p className='text'>This quaint little city on the island of Fyn is where Hans Christian Andersen was born!</p>

        <img className='city-img' src={aalborg} alt="Aalborg gågade" />
        <h2 className='heading'>Aalborg</h2>
        <p className='text'>Viking legacy, modern architecture and som of the best street art in Denmark can be found in Aalborg.</p>
        </div>

    </div>
  )
}

export default MainPage