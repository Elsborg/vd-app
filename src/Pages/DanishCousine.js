import React from 'react'
import "../DanishCousine.css"
import beersandwich from "../Images/beersandwich.png"
import coffee from "../Images/originalcoffee.png"
import fjorden from "../Images/cafepaafjorden.png"
import lidkoeb from "../Images/lidkoeb.png"
import { Link, useNavigate } from 'react-router-dom';


const DanishCousine = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className="container">
    <img src={beersandwich} alt="Snow"/>
    <div className="centered">Danish Cousine</div>
  </div>
<div className='stack-div'>Which cousine experience are you looking for?</div>

<div id='margin-img' className="contain">
    <Link to="/Cafe">
  <img src={coffee} alt="Original Coffee Illum Rooftop"/>
  <div className="center">Café</div>
  </Link>
</div>

<div className="contain">
  <img src={fjorden} alt="Lunch at Café Paa Fjorden"/>
  <div className="center">Restaurant</div>
</div>

<div className="contain">
  <img src={lidkoeb} alt="A bartender at Lidkoeb which is located in the neighbourhood Vesterbro in Copenhagen."/>
  <div className="center">Nightlife & Clubs</div>
</div>


<button onClick={() => navigate(-1)} className='bottom-btn'> <span className='arrowBtn'> ❮ </span>Back</button>




  </div>
  )
}

export default DanishCousine