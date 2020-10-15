import React from 'react';

const Card = (props) =>{

	return(
         <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
           <img style={{width:'250px',height:'250px'}}src={"https://robohash.org/"+props.id+"?200x200"} alt="robot"/>

           <div>
           <h2>{props.name}</h2>
           <p>{props.email}</p>

           </div>


         </div>
		);
}

export default Card;