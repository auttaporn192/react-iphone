import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addProductToCart} from '../../actions'

const Product = (props) => {
    const {
        title,
        price,
        images,
        description,
        id,
    } = props.product;
    const handleAddProduct = (e) => {
        console.log('event_add')
        props.dispatch(addProductToCart(props.product))
    }
     const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    return (
       <div className="card h-90 product">
            <Link to={`/products/${id}`} className="product_link"><img
                className="card-img-top product_img" src={img} alt={title} ref={imageRef}/>
                <div className="price"> ${formatMoney(price)}</div>
            </Link>
            <div className="card-body product_text">
                <h4 className="card-title product_title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <h5 className="product_price">${price}</h5>
                <p className="card-text product_description">{description}</p>
                <button onClick={handleAddProduct}
                    className="btn btn-info product-addcart">Add to carts
                </button>
            </div>
        </div>
    )
}
export const formatMoney = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
export default connect()(Product)
