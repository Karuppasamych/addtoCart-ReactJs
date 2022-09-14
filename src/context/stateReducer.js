export const initialstate={
    cartItems : [],
    favorites : [],
    
}

export const stateReducer = (state, action) =>{
    console.log(action.Data,'AD=====')
    switch (action.type){
        case 'ADD_to_Cart' :{
            return{
                ...state,
                cartItems:action.Data,
            };
        }

        default:
            return state;
    }
}