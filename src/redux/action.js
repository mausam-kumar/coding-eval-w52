import axios from 'axios'
import {actionTypes} from './actionTypes.js'

export const fetchProduct = () => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.FETCH_PRODUCT_REQUEST
    })
    try {
        const payload = {
            url:`http://localhost:3001/products`,
            method: 'get'
        }
    
        const {data} = await axios(payload)
        console.log("data",data);
        dispatch({
            type:actionTypes.FETCH_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.FETCH_PRODUCT_ERROR
        })
    }
}

export const addItemToCart = ({payload}) =>{
    console.log("payload",payload);
    return{
        type:actionTypes.ADD_ITEM_CART,
        payload: payload
    }
}

export const decreseCartItem = () =>{
    return{
        type:actionTypes.DECRESE_CART_ITEM
    }
}
export const increseCartItem = () =>{
    return{
        type:actionTypes.INCRESE_CART_ITEM
    }
}