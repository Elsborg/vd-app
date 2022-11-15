import React from 'react'
import "../DanishCousine.css"
import coffee from "../Images/originalcoffee.png"
import cphsq from "../Images/cphsquare.png"
import aarhussq from "../Images/aarhussquare.png"
import odensesq from "../Images/odensesquare.png"
import aalborgsq from "../Images/aalborgsquare.png"
import { Link, useNavigate } from 'react-router-dom';

const Cafe = () => {
    const navigation = useNavigate();
    
  return (
    <div>
    <div className="container">
    <img src={coffee} alt="Snow"/>
    <div className="centered">Café</div>
  </div>
<div className='stack-div'>Which city are you looking to experience this in?</div>

<Link to="/Aarhus">
<div id="coverCities">
            <img src={cphsq} alt="Copenhagen" />
            <p className='centeredLeft'>Copenhagen</p>
            
            <img src={aarhussq} alt="Aarhus"/>
            <p className='centeredRight'>Aarhus</p>
            <img src={odensesq} alt="Odense"/>
            <p className='bottomLeft'>Odense</p>
            <img src={aalborgsq} alt="Aalborg"/>
            <p className='bottomRight'>Aalborg</p>
</div> 
</Link>


        <button onClick={() => navigation(-1)} className='bottom-btn'> <span className='arrowBtn'> ❮ </span>Back</button>



</div>
  
  )}

export default Cafe