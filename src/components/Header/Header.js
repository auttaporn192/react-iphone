import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

const Header = (props) => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                                                          aria-hidden="true" />Cart({props.cartItem}) </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
 const  mapStateToProps = state => {
     const cartItem = [...state.Bracket.cart]
     return 
}

export default connect(mapStateToProps)(Header)
