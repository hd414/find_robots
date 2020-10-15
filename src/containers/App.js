import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import Error from '../components/Error';
import {setSearch} from '../Action.js'; 


const mapToProps = (state) =>{
  return{
    search:state.search
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
  onsearch: (event) => dispatch(setSearch(event.target.value))
}
}

class App extends React.Component{

	constructor(){
		super()
		this.state={
			robots:[],
	      
		}
	}
  componentDidMount(){
    console.log(this.props.store);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      return response.json();
    }).then((users)=>{
           this.setState({robots:users})
      })
    
  
  }
	
   render(){
    const {robots} = this.state;
    const {search,onsearch} = this.props;
   	  const filter = robots.filter((robot)=>{
          return(robot.name.toLowerCase().includes(search.toLowerCase()));
       })
    
      
    
   return(
   	<div className=' tc'>
   	<h1 className='f-subheadline lh-title'>RoboFriends</h1>
     <Searchbox search={onsearch}/>
     <Scroll>
      <Error>
   	<CardList robots={filter}/>
     </Error>
    </Scroll>

   	</div>
   	);
   
   }
}















export default connect(mapToProps,mapDispatchToProps)(App);
