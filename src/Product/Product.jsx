import './Product.css'

const Product = ({product,handleSelectedProduct}) => {
    const {id,name,image,description,price,category,isFeature} = product;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="cart-price">
                <p>${price}</p>
                <p>{isFeature?"Feature Category":"Not Category"}</p>
            </div>
            <button onClick={()=>handleSelectedProduct(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;