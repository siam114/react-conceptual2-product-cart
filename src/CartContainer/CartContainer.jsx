
import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'

const CartContainer = ({handleIsActiveState,isActive,selectedProducts,handleDelete}) => {
    return (
        <div>
            <h1>CartContainer</h1>
            <div className="flex">
                <div onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart?"btn active":"btn"}`}>CART</div>
                <div onClick={()=>handleIsActiveState("about")} className={`${isActive.cart?"btn":"btn active"}`}>ABOUT</div>
            </div>

            {isActive.cart?<Cart handleDelete={handleDelete} selectedProducts={selectedProducts}></Cart>:<About></About>}

        </div>
    );
};

export default CartContainer;