import React from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {actionTypes} from '../redux/actionTypes.js'
import {addItemToCart,increseCartItem,decreseCartItem} from '../redux/action.js'
import {useDispatch} from 'react-redux'

function CartItem({src,name,price,quantity}) {
    const [count,setCount] = React.useState(quantity)
    const dispatch = useDispatch()


    function handleIncrease(){
        setCount(prev => prev+1)
        dispatch(increseCartItem())
    }
    function handleDecrease(){
        setCount(prev => {
            if (prev==0) {
                return prev
            }else{
                return prev-1
            }
        })
        dispatch(decreseCartItem())
    }

    const styles = {
        imageStyle:{
            height:"150px",
            width:"150px",
            borderRadius:"50%",
            objectFit:"contain"
        },
        leftDiv:{

        },
        rigthDiv:{
            width:"50%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return (
        <Paper sx={{width:"400px",padding:"20px",margin:"15px",display:"flex",alignItems:"center"}}>
            <div style={styles.leftDiv}>
                <img style={styles.imageStyle} src={src} alt={name} />
            </div>
            <div style={styles.rigthDiv}>
                <p>{name}</p>
                <p>{price}</p>
                <br />
                <div style={{display:"flex",alignItems:"center"}}>
                    <Button variant="contained" sx={{fontSize:"22px",margin:"10px"}} onClick={handleDecrease}>-</Button>
                        <p>{count}</p>
                    <Button variant="contained" sx={{fontSize:"22px",margin:"10px"}} onClick={handleIncrease}>+</Button>
                </div>
                
            </div>
        </Paper>
    )
}

export default CartItem
