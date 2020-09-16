import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from '../../components/Product/Product'
import Pagination from '../../components/Pagination/Pagination'
import SearchBar from '../../components/SearchBar/SearchBar'
export class ProductList extends Component {
    state = {
        colValue : 'col-lg-4'
    }


    render() {
        return (
           <div className="col-lg-9 col-md-9 col-sm-9 productlist">
                <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                
                        <div className="card ">
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <SearchBar priceMin="0" priceMax={getMavalue(this.props.products)}/>
                </div>
                
                <div className="row">
                    {paginationPipe(this.props.products,{...this.props.pagination}).map(product =>{
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes}>
                            <Product key={product.id} product={product} />
                        </div>)
                    })}
                </div>
               
                <div className="d-flex justify-content-end">
                    <Pagination countItems={getCountItems(this.props.products)}/>
                </div>
            </div>
        )
    }
}
const getMavalue = (products) => {
    console.log(products)
    return Math.max.apply(null,products.map(item => item.price))
}

const getCountItems = (products) =>products.length

const brandFilter = (arr ,brands) => {
    if (!brands) return arr 
    return arr.filter(product => brands.includes(product.brand))
}

const orderByFilter = (filterProduct,orderBy) => {
    if (orderBy === "asc") 
    return filterProduct.slice().sort((a,b) => a.price-b.price)
    else
    return filterProduct.slice().sort((a,b) => b.price-a.price)
}

const paginationPipe = (productPages,args) => {
    console.log(args)
    let location = args.perPage * (args.currentPage - 1)
    return productPages.slice(location,location+args.perPage)
}
const priceByFilter = (filterProduct, priceBy) =>{
    return filterProduct.filter(c => c.price <= priceBy)
}



const mapStateToProps = state => {
   
    const brands = state.brandFilter
    const orderBy = state.orderPrice;
    const pagination = state.pagination
    const search = state.searchBar

    const filterByBrandArr = brandFilter(state.shop.products,brands)
    const filterByPrice = priceByFilter(filterByBrandArr,search.price) 
    const filterByOrderArr = orderByFilter(filterByPrice, orderBy);

    //console.log(`pagination:${pagination}`)
    return {products: filterByOrderArr ,pagination}
};

export default connect(mapStateToProps)(ProductList);

