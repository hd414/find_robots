import React from 'react';


const Searchbox=({search})=>{

     return(
         <div>
          <input onChange = {search} className = "pa3 ba b--black bg-lightest-blue" type='search' placeholder='robot name'/>
         </div>
     	);
}

















export default Searchbox ;