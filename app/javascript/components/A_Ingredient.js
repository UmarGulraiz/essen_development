import React from 'react'
import A_ArrowDown from 'images/recipe_icons/icon.png'

const A_Ingredient = () => {
  return (
    <span className="ingeredients-list-arrow">
      <span className="ingeredient-with-list">Тофу</span>
      <img src={ A_ArrowDown}/>
    </span>
  )
}

export default A_Ingredient
