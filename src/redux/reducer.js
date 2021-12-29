import {actionTypes} from './actionTypes.js'

const initState = {
    homepageProduct:{
        isLoading:false,
        isError:false,
        data:[]
    },
    cartProduct:{
        
        data:[]
    },
    countCartItems:0
    
}

export const reducer = (state=initState, action) =>{
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_REQUEST:
            return{
                ...state,
                homepageProduct:{
                    ...state.homepageProduct,
                    isLoading:true
                }
            }
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                homepageProduct:{
                    ...state.homepageProduct,
                    isLoading:false,
                    isError:false,
                    data:[...action.payload]
                }
            }
        case actionTypes.FETCH_PRODUCT_ERROR:
            return{
                ...state,
                homepageProduct:{
                    ...state.homepageProduct,
                    isLoading:false,
                    isError:true
                }
            }
        
        case actionTypes.ADD_ITEM_CART:
            
            return{
                ...state,
                cartProduct:{
                    ...state.cartProduct,
                    data:[...state.cartProduct.data,action.payload]
                }
            }
        case actionTypes.DECRESE_CART_ITEM:
            
            return{
                ...state,
                countCartItems:state.countCartItems===0?0:state.countCartItems-1 
            }
        case actionTypes.INCRESE_CART_ITEM:
            return{
                ...state,
                countCartItems:state.countCartItems+1 
            }
    
        default:
            return state;
    }
}