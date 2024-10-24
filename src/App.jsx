import { useState } from 'react'
import AllProducts from './AllProducts.jsx/AllProducts'
import './App.css'
import CartContainer from './CartContainer/CartContainer'
import Navbar from './Header/Navbar'

function App() {
  
  const [isActive,setIsActive] = useState({
    cart: true,
    status: 'cart'
  })

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [price,setPrice] = useState(500);

  const handleIncreasePrice = (pr) =>{
        setPrice(price + pr);
  }

  const handleDecreasePrice = (id) =>{
     const product = selectedProducts.find((p)=> p.id == id);
     setPrice(price - product.price);
  }

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((p)=> p.id == product.id);
    if(isExist){
      alert('Already isExist');
    }else{
      handleIncreasePrice(product.price);
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  }

  const handleDelete = (id) =>{
    handleDecreasePrice(id);
    const newProduct = selectedProducts.filter((p)=> p.id !== id);
    setSelectedProducts(newProduct);
  }

  const handleIsActiveState = (status) =>{
    if(status == "cart"){
      setIsActive({
         cart: true,
         status: "cart"
      })
    }
    else{
      setIsActive({
         cart: false,
        status: "about"
      })
    }
  }


  return (
    <>
      <Navbar price={price} selectedProducts={selectedProducts.length}></Navbar>

      <div className='flex'>
           <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
           <CartContainer 
           selectedProducts={selectedProducts} 
           isActive={isActive} 
            handleDelete={handleDelete}
           handleIsActiveState={handleIsActiveState}>
           </CartContainer>
      </div>
    </>
  )
}

export default App
