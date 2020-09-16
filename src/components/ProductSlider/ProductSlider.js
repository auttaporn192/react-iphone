import React,{useState} from 'react'



const ProductSlider = ({images}) => {
    const [imgs, setImg] = useState(images[0])
    return (
        <aside className="col-md-5">
            <div className="py-3" style={{padding:"2rem"}}>
             <img src={imgs} alt="phone"/>
            </div>
        </aside>
    )
}

export default ProductSlider
