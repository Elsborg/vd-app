import React, { useEffect, useState } from 'react'
import CafeItem from "./CafeItem";


const Cafes = () => {


    const[cafes, setCafes] = useState([]);

    useEffect(() => {

        async function getCafes()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var cafe = data[i];
               if(cafe.Category.Id == '64')
               {
                    filteredrest.push(cafe)
               }
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setCafes(filteredrest);
        }
        getCafes();

    }, []);




  return (
    <>
        {
           cafes.map(cafe =>(<CafeItem cafe={cafe} key={cafe.id} />))
           
        }
            
    </>
  )
}

export default Cafes