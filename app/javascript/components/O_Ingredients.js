import React from 'react'
import A_IconPlus from 'images/recipe_icons/plus_icon.svg'
import A_IconMinus from 'images/recipe_icons/minus_icon.svg'
import A_TextCaption from './A_TextCaption'
import M_Ingredients from './M_Ingredients'

const O_Ingredients = ({ recipe }) => {


  const ingredientDetails = (ingredientId) =>
    recipe.post_ingredients.find((x) => x.ingredient_id == ingredientId)

  return (
    <div>
      <div className="ingredients-title-block">
        <div className="ingredient-title">Порций</div>
        <div className="signs-block">
          <img src={A_IconMinus} className="icon-minus" />
          <div className="number-rec">{recipe.number_of_servings}</div>
          <img src={A_IconPlus} className="icon-plus"/>
        </div>
        <hr style={{ border: "1px solid #E0E2E8" }}></hr>
        <div className="recipe-title">
          <A_TextCaption name=" Ингpедиенты"/>
        </div>
        {console.log(recipe.post_ingredients)}
        {recipe.ingredients.map((ingredient) => {
          return (
            <M_Ingredients
              key={ingredient.id}
              title_1={ingredient.ingredient}
              title_2={`— ${ingredientDetails(ingredient.id).amount} ${ingredientDetails(ingredient.id).measure}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default O_Ingredients
