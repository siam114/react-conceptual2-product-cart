import './Navbar.css'
const Navbar = ({selectedProducts,price}) => {
    return (
    <div className='container'>
            <div className="navbar">
            <div className='logo'>
              <h3>Logo</h3>
            </div>
            <div className="menus">
                <p className="item">Home</p>
                <p className="item">Product</p>
                <p className="item">Cart {selectedProducts}</p>
                <p className="item">$ {price}</p>
            </div>
        </div>
    </div>
    );
};

export default Navbar;