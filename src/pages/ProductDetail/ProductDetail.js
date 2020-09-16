import {connect} from 'react-redux'
import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'
import ProductSlider from '../../components/ProductSlider/ProductSlider'


export const ProductDetail = (props) => {
    
    return (
        <>
        
        <div className="container" style={{padding:'6rem 0'}}>
        <div className="card">
            <div className="row">
            <ProductSlider images={props.product.images} />
            <ProductDetailComponent product={props.product} />
         </div>
         </div>
         </div>
        </>
    )
}

const mapStateToProps = (state,props) => {
    //console.log(+props.match.param.id)
    const prod = state.shop.products.find(p => p.id === parseInt(props.match.params.id,10))
    console.log(prod)
    return {product:prod}
} 

export default connect(mapStateToProps)(ProductDetail)
