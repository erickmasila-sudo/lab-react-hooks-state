import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const[darkMode, setDarkMode]= useState(false)
  // TODO: Implement state for cart management
  const[cartItems, setCartItems] =useState([])
  const addToCart =(product) =>{
    setCartItems((prev)=> [...prev,product])
  }
  // TODO: Implement state for category filtering
  const[category, setCategory] =useState('all')
  return (
    <div>
      
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle  darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) =>  setCategory(e.target.value)} value={category}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart={addToCart}/>

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
