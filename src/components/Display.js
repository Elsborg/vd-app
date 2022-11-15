import  Data  from "../data.json";

import React from 'react'

const Display = () => {
  return (
    <div>
        {
            Data.map(post => {
                return(
                <div key={post.id}>
                    <h2>{post.Name}</h2>
                    <a href={post.CanonicalUrl}>More info</a>
                    {post.Files && post.Files.map(data => (
                        <div key={post.id}>
                            
                            <img src={data.Uri}/>
                        </div>
                        
                    ))}
                    
                </div>
                )
            })
        }
    </div>
  )
}

export default Display