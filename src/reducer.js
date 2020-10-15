import {CHANGE_SEARCH} from './Constant.js';
const initialState = {
	search : ''
}

export const searchRobots = (state=initialState,action={}) => {
	switch(action.type){
        case  CHANGE_SEARCH:
         return Object.assign({},state,{search:action.payload});
        default :
          return state;
	}
}