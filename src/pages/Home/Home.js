import React from 'react'
import ProductList from '../../containers/ProductList/ProductList'
import FilterBar from '../../containers/FilterBar/FilterBar'

const Home = props => {
    return (
        <>
        <div className="container" style={{paddingTop: '6rem'}}>
            <div className="row">
                <FilterBar />
                <ProductList />
            </div>
        </div>
        </>
    )
}


export default Home
