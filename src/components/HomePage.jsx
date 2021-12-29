import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
// import {actionTypes} from '../redux/actionTypes.js'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import {fetchProduct} from '../redux/action.js'
import HomeItem from './HomeItem.jsx'

function HomePage() {

    const dispatch = useDispatch() 
    const {data} = useSelector(state => state.reducer.homepageProduct)
    const {countCartItems} = useSelector(state => state.reducer)
    console.log(data);

    function fetchData(){
        dispatch(fetchProduct())
    }

    React.useEffect(() => {
        fetchData()
    },[])

    return (
        <div>
            <div style={{display: 'flex'}}>
                <Link to="/checkout"><Button variant="contained">Checkout {countCartItems}</Button></Link>

            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
            {
            data.map((ele) => {
                return(
                    <HomeItem key={ele.id} name={ele.name} price={ele.price} src={ele.image} id={ele.id}/>
                )
            })
            }
        </div>
        </div>
    )
}

export default HomePage
