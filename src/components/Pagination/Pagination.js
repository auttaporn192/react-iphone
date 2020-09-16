import React , {useState} from 'react'
import {prevPage , nextPage , selectPage} from '../../actions'
import {connect} from 'react-redux'



const Pagination = (props) => {
    const {dispatch , countItems , perPage , currentPage , pageShow} = props
    const [enableButon , setEnable] = useState(true)
    const handleNext = (e) => {
    dispatch(nextPage())
    }

    //setEnable = () => currentPage === Math.ceil(countItems/perPage)
    const getPage = () => {

    const totalPages = Math.ceil(countItems / perPage)
    const p = currentPage || 1
    const pagesShow = pageShow || 3
    const pages = []
    pages.push(p)
    const times = totalPages - 1
   
    for(let i=0; i <times; i++) {
        if (pages.length < pagesShow){
            if (Math.min.apply(null,pages) > 1){
                pages.push(Math.min.apply(null,pages)- 1)
            }

            if (Math.max.apply(null,pages) < totalPages){
            pages.push(Math.max.apply(null,pages) + 1)
            }
        }
    }
    
    return pages.sort((a,b) => a-b)
}
    const  handlePrev = (e) => {
        dispatch(prevPage())
    }

    const handleSelectPage = (page) => {
        dispatch(selectPage(page))
    }

    


const arrButton = getPage().map(page => {
    return (<li><button onClick={() => handleSelectPage(page)}>{page}</button></li> )
    }
    )
const prevButton = (<li className="page-item"><button onClick={handlePrev} 
    disabled={currentPage === 1}>Previous
</button></li>)

const nextButton = (<li className="page-item"><button onClick={handleNext}
    disabled = { currentPage === Math.ceil(countItems/perPage)} >Next</button></li>)
    return (
        <nav>
            <ul  className="pagination">
                {prevButton}
                {arrButton}
                {nextButton}
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    const pagination = state.pagination
    return pagination
}
export default connect(mapStateToProps)(Pagination)
