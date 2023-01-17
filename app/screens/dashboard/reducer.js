
const INCREASE_COUNT = 'INCREASE_COUNT'
const DESCREASE_COUNT = 'DESCREASE_COUNT'
const RESET_COUNT = 'RESET_COUNT'

const initialState = {
   count: 0
}

export const dashboardReducer = (state = initialState, action) => {
   let newState = {...state};
   switch(action.type){
      case INCREASE_COUNT :
         newState.count = 1;
      break;
      case DESCREASE_COUNT :
         newState.count = 1;
      break;
      case RESET_COUNT :
         newState.count = 1;
      break;
   }
   return newState;
}