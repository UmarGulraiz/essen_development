import React from 'react'
import A_ArrowDown from 'images/recipe_icons/icon.png'

const M_Ingredients = () => {
  return (
    <>
      <div className="ingeredients-list-block">
        <div className="ingeredient-one">Томаты</div>
        <div className="ingeredient-two">— 7 шт</div>
      </div>
      <div className="ingeredients-list-block">
        <div className="ingeredient-one">Базилик</div>
        <div className="ingeredient-two">— 80 г</div>
      </div>
      <div className="ingeredients-list-block">
        <span className="ingeredients-list-arrow">
          <span className="ingeredient-with-list">Тофу</span>
          <img src={ A_ArrowDown}/>
        </span>
        <div className="ingeredient-two">— 20 г</div>
      </div>
      <div className="ingeredients-list-block">
        <div className="ingeredient-one">Соль</div>
        <div className="ingeredient-two">— по вкусу</div>
      </div>
      <div className="ingeredients-list-block">
        <div className="ingeredient-one">Черный перец</div>
        <div className="ingeredient-two">— по вкусу</div>
      </div>
    </>
  )
}

export default M_Ingredients
