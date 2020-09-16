import React from 'react'
import {connect} from 'react-redux'
import {serchProduct , searchByPrice} from '../../actions'

const SearchBar = (props) => {
    const {priceMin , priceMax , priceValue} = props
    const handleSearch =(e) => {
        props.dispatch(serchProduct(e.target.value))
    }
    const handlePrice = (e) => {
         props.dispatch(searchByPrice(e.target.value))
    }
    return (
        <div className="search-bar">
          <div className="search-price">
                <label htmlFor="price">price : {priceMax}</label>
                <input type="range" min={priceMin} max={priceMax} value={priceValue} onChange={handlePrice}/>
            </div>
            <div className="search-title">
                <input type="textbox" className="search-input" onChange={handleSearch} />
                <input type="button" value="search" className="search-button"/>  
            </div>

          

        </div>
    )
}

export default connect()(SearchBar)
