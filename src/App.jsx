import { useState } from 'react'
import Header from './components/Header'
import FoodOption from './components/Food/Foodoption'
import GroceryOption from './components/Grocery/GroceryOption'

function App() {


  return (
    <>
     <Header />
     <FoodOption/>
     <GroceryOption/>
    </>
  )
}

export default App
