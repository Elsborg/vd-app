import React from 'react'
import aarhusCover from "../Images/aarhusCover.png"
import Cafes from '../components/Cafes'
import { useNavigate } from 'react-router-dom';


const Aarhus = () => {
    const navigation = useNavigate();
   
  return (
    
<div>
    <div className="container">
    <img src={aarhusCover} alt="Aarhus"/>
    <div className="centered">Aarhus</div>
  </div>
<div className='stack-div'>Which café do you want to visit?</div>

<div className='cardCafe'>
    <Cafes/>
    </div>


    <button onClick={() => navigation(-1)} id="sticky"> <span className='arrowBtn'> ❮ </span>Back</button>
</div>

  )
}

export default Aarhus