import { useEffect, useState } from 'react';
import './AllProducts.css'
import Product from '../Product/Product';
const AllProducts = ({handleSelectedProduct}) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("./blog.json")
        .then(res=> res.json())
        .then(data=>setProducts(data.products))
    },[])
    return (
        <div>
            <h1>AllProduct: {products.length}</h1>
            <div className='grid'>
            {
                products.map((p,idx)=> <Product handleSelectedProduct={handleSelectedProduct} key={idx} product={p}></Product>)
            }
            </div>
        </div>
    );
};

export default AllProducts;