import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import CartItem from './CartItem.jsx'
import {useNavigate} from 'react-router-dom'

function CheckoutPage() {

    const {data} = useSelector(state => state.reducer.cartProduct)
    const navigate = useNavigate()

    function handleCheckout(){
        alert("Checkout Success")
        navigate("/homepage")
    }
    return (
        <div>
            <Link to="/homepage"><Button variant="contained">Homepage</Button></Link>

            {
            data.map((ele) => {
                return(
                    <CartItem key={ele.id} name={ele.name} price={ele.price} src={ele.image} id={ele.id} quantity={ele.count}/>
                )
            })
            }

        <Button onClick={handleCheckout} varient="contained">Checkout</Button>

        </div>
    )
}

export default CheckoutPage
