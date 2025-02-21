import React from 'react'
import { GrocerGridCard } from '../../Utils/Grocery'
import Grocerycard from './GroceryCard'

const GroceryOption = () => {
  return (
    <>
    <div className="mt-20 w-[80%] container mx-auto">
    <h1>Shop Groceries on Instamart</h1>
    <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
        {
            GrocerGridCard.map((Grocery)=> <Grocerycard key={Grocery?.id} Grocery={Grocery}/>)
        }
    </div>
    </div>
    </>
  )
}

export default GroceryOption