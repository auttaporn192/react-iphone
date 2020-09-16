import React from 'react'
import {connect} from 'react-redux'
import {addProductToCart} from '../../actions'

export  const ProductDetailComponent = (props) => {
     const {
        title,
        images,
        brand,
        price,
        cpu,
        camera,
        size,
        weight,
        display,
        battery,
        memory,
        description,
        id} = props.product
    return (
        <aside className="col-md-7">
            <article className="p-5">
            <h3 className="mb-5">{title}</h3>
            <dl>
                <dt > Brand : </dt>
                <dd> {brand} </dd>
            </dl>
            <dl>
                <dt> Price : </dt>
                <dd> {price} </dd>
            </dl>
            <dl>
                <dt>Display: </dt>
                <dd>{display}</dd>
            </dl>
            <dl>
                <dt> Description : </dt>
                <dd> {description} </dd>
            </dl>
            <button>Add Product </button>
            </article>
        </aside>
    )
}
export default connect()(ProductDetailComponent)