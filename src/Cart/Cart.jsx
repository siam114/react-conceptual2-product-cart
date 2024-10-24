

const Cart = ({ selectedProducts,handleDelete }) => {
    return (
        <div>
            {
                selectedProducts.map((product) => (
                    <div>
                        <div className="flex selected-container">
                           <img className="selected-img item" src={product.image} alt="" />
                           <p className="item">{product.name}</p>
                           <p className="item">{product.price}</p>
                           <button onClick={()=>handleDelete(product.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;