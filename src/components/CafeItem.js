import React from 'react'



const CafeItem = ({cafe}) => {

  return (
    <div className='cardContainer'>
        {cafe.Files && cafe.Files.map((data,i) =>
        {
            if(i === 0){
            return ( <div key={data.id}> <img className='imgCafe' src={data.Uri} alt="Cafés"/> </div> )
            } 
        }
        )}

        <p>{cafe.Name}</p>

        {cafe.Descriptions && cafe.Descriptions.map((data,i) =>
        {
            if(i === 0){
            return ( <div key={data.id} className="centerText"><div className='cardText'>{data.Text}</div> </div> )
            } 
        }
        )}

    </div>
  )
}

export default CafeItem