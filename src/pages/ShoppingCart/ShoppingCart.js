import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import {connect} from 'react-redux'
//import './ShoppingCart.scss'

const ShoppingCart = (props) => {
   console.log(props.items)
    return (
        <>
      
        <div className="container" style={{paddingTop:'6rem'}}>
            <div className="card">
                <div className="card-header"><h3>Shopping Cart</h3></div>
                <div className="card-body">
                    {props.items.map(item =>  (<CartItem item={item} />)
                    )}
                </div>
                <div className="card-footer total">
                    <div className="pull-right" style={{margin: '10px'}}>
                        <div className="pull-right" style={{margin: '5px'}}>
                    <h4>{CalculatTotal(props.items)}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
const CalculatTotal = (items)=> {
    return items.reduce((acc,item) => {return acc + item.price }, 0)
}

const mapStateToProps = (state) => {
    return {items : state.Bracket.cart}
}

export default connect(mapStateToProps,null)(ShoppingCart)
