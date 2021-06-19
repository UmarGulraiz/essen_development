import React from 'react'
import A_IconPlus from 'images/recipe_icons/plus_icon.svg'
import A_IconMinus from 'images/recipe_icons/minus_icon.svg'
import A_TextCaption from './A_TextCaption'
import M_Ingredients from './M_Ingredients'

const O_Ingredients = () => {
  return (
    <div>
      <div className="ingredients-title-block">
        <div className="ingredient-title">Порций</div>
        <div className="signs-block">
          <img src={A_IconMinus} className="icon-minus" />
          <div className="number-rec">2</div>
          <img src={A_IconPlus} className="icon-plus"/>
        </div>
        <hr style={{ border: "1px solid #E0E2E8" }}></hr>
        <div className="recipe-title">
          <A_TextCaption name=" Ингpедиенты"/>
        </div>
        <M_Ingredients
          title_1="Томаты"
          title_2="— 7 шт"
        />
        <M_Ingredients
          title_1="Базилик"
          title_2="— 80 г"
        />
        <M_Ingredients
          title_1="Тофу"
          title_2="— 20 г"
          showDropdown={true}
        />
        <M_Ingredients
          title_1="Соль"
          title_2="— по вкусу"
          showQuestionMark={ true}
        />
        <M_Ingredients
          title_1="Черный перец"
          title_2="— по вкусу"
          showQuestionMark={ true}
        />
      </div>
    </div>
  )
}

export default O_Ingredients
