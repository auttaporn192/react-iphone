import React , {useState} from 'react'
import {connect} from 'react-redux'
import {removeProduct , increaseQuantity , decreaseQuantity} from '../../actions'


const CartItem = (props) => {
      console.log(props)
    const {description , title , price , images, quantity ,id} = props.item
    const[itemqty , setItemqty] = useState(quantity)
    const handleRemove = (e) => {
        props.dispatch(removeProduct(id))
    }
    const handleIncreaseOrDecrease = (e, types) =>{
        console.log(quantity)
        const value = itemqty
        if (types === 'inc'){
            setItemqty(value + 1)
            props.dispatch(increaseQuantity(id))
        }
        else {
            if (value === 1)
            {
                 props.dispatch(removeProduct(id))
            }
            else{
            setItemqty(value - 1)
            props.dispatch(decreaseQuantity(id))
            }
        }
    }

    return (
        <div className="row mb-3">
            <div className="col-md-2">
                <img src={images[0]} alt={description} style={{width:'60%', height:'60%'}} />
            </div>
            <div className="col-md-6">
                <h4>{title}</h4>
                <small>{description}</small>
            </div>


            <div className="col-md-4 row">
                <div className="col-6 col-sm-6 col-md-6">
                    <strong>{formatMoney(price)}</strong>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity" >
                        <input type="button" className="plus" value="+" onClick={(e) => handleIncreaseOrDecrease(e,"inc")}/>
                        <input type="number" step="1" max="10" min="1" value={itemqty} className="qty"></input>
                        <input type="button" className="minus" value="-" onClick={(e) => handleIncreaseOrDecrease(e,"dec")} />
                            
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn-danger" onClick={handleRemove}>Remove</button>
                </div>
            </div>


        </div>
    )
}
export const formatMoney = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};


export default connect()(CartItem)
