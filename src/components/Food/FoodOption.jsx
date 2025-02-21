import React from 'react'
import { imageGridCards } from '../../Utils/FoodData'
import FoodCard from './FoodCard'


const FoodOption = () => {
  return (
   <>
   <div className='m-[80%] container mx-auto flex flex-wrap mt-20 gap-3'>
   {
        imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
    }
   </div>
   
   </>
  )
}

export default FoodOption