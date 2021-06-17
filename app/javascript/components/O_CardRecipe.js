import React from 'react'
import recipeImage from 'images/recipe_icons/recipe.svg'
import A_IconBookmark from 'images/recipe_icons/favorite.svg'
import A_IconTime from 'images/recipe_icons/icon_time.svg'
import A_IconDifficulty from 'images/recipe_icons/vector.svg'
import M_TextAndIcon from './M_TextAndIcon'
import A_TextBodyCards from './A_TextBodyCards'

const O_CardRecipe = () => {
  const recipies = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {
        recipies.map((recipe) => {
          return (
            <div class="main-card-container" style={{position: "relative"}}>
            <div>
              <img class="recipe-image" src={recipeImage}></img>
            </div>
            <div >
              <img class="favoriteIcon" src={A_IconBookmark}></img>
            </div>
            <A_TextBodyCards name="Равиолли со шпинатом"/>
            <div style={{ display: "flex", padding: "16px" }}>
              <div style={{ marginRight: "10px"}}>
                <M_TextAndIcon
                  icon={A_IconTime}
                  text="70 мин"
                />
              </div>
              <M_TextAndIcon
                icon={A_IconDifficulty}
                text="Нужно постараться"
              />
            </div>
          </div >
          )
        })
      }
    </>
  )
}

export default O_CardRecipe

