import React, {  } from 'react'
import "./card.css"
export default function Card({properties}) {
   
    return (
        <div>
            {console.log(properties)}
            <section>
                <div className='container'>
                <div className='cards'>
                    {
                        properties.map((card,i)=>(
                            <div key={i} className='card'>
                                <img src={card.image} alt=''/>
                                <div className='d-inline h-100 fs-5' style={{color:"green" ,display:'flex'}}>
                                 ₹{card.price}/-
                                
                                </div>
                                
                                <h3>{card.title}</h3>
                                
                                <p>{card.description}</p>
                                
                                </div>
                        ))
                    }

                </div>

                </div>
         </section>
        
        </div>
    )
}
