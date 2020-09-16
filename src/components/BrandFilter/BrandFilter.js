import React from 'react'
import {connect} from 'react-redux'
import {brands} from '../../data/brands'
import {addBrandToFilter , removeBrandFromFilter} from '../../actions'
//import './BrandFilter.css';
const BrandFilter = (props) => {
   const {dispatch, brandItemCount} = props
    const handleSelectBox = (e) => {
        const name = e.target.name
        const value = e.target.checked
        console.log('check')
        if(e.target.checked){
            
            dispatch(addBrandToFilter(name))
        } else {
           // dispatch(removeBrandFromFilter(name))
           dispatch(removeBrandFromFilter(name))
        }
    }
    return (
         <div className="card mb-3">
                <div className="card-header">
                    <h3>Brands</h3>
                </div>
            <ul className="list-group flex-row flex-wrap">
                    {brands.map(brand => (
                    <li className="list-group-item flex-50">
                            <label className="custom-checkbox text-capitalize"> {brand} ({brandItemCount[brand]})
                                <input type="checkbox"
                                       name={brand}
                                       className="input-checkbox" onInput={handleSelectBox}/>
                                 <span className="custom-span"></span>
                            </label>
                        </li>)
                    )}
                </ul>

                
        </div>
    )
}

const mapStateToProps = state => {
    const brandItemCount = {}
    state.shop.products.forEach(p => {
        brandItemCount[p.brand] = brandItemCount[p.brand] + 1 || 1 
    })
    console.log(state.shop.products)
    return {brandItemCount}
}



export default connect(mapStateToProps)(BrandFilter)

