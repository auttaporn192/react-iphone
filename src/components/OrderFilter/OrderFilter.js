import React from 'react'
import {connect} from 'react-redux'
import { orderByDesc , orderByAsc } from '../../actions'

const OrderFilter = ({dispatch}) => {
    const handleRadioChange = (e) => {
        const value = e.target.value
        if (value === "1"){
            dispatch(orderByAsc())
        }
        else{
            dispatch(orderByDesc())
        }

    }
    return (
        <div className="card">
            <div className="card-header"> 
            <h3>Price</h3>
            </div>
               <ul className="list-group flex-row  flex-wrap" >
                    <li className="list-group-item flex-fill">
                        <label className="custom-radio">Low-to-High
                        <input type="radio" value="1"
                            name="orderByPrice" className="input-radio"
                            onChange={handleRadioChange}
                        >
                        </input>
                        <span className="custom-radio-span"></span>
                        </label>
                    </li>
                     <li className="list-group-item flex-fill">
                        <label className="custom-radio">High to Low
                        <input type="radio" value="2" onChange={handleRadioChange}
                            name="orderByPrice" className="input-radio"
                        >
                        </input>
                        <span className="custom-radio-span"></span>
                        </label>
                    </li>
                </ul>
           
        </div>
    )
}

export default connect()(OrderFilter)
