import React from 'react'
import recipeImage from 'images/recipe_icons/recipe.svg'
import A_IconBookmark from 'images/recipe_icons/favorite.svg'
import A_IconTime from 'images/recipe_icons/icon_time.svg'
import A_IconDifficulty from 'images/recipe_icons/vector.svg'
import M_TextAndIcon from './M_TextAndIcon'
import A_TextBodyCards from './A_TextBodyCards'

const O_CardRecipe = (props) => {
  const { recipes } = props
  const recipies = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {
        recipes.map((recipe) => {
          return (
            <div class="main-card-container" style={{position: "relative"}}>
            <div>
              <img class="recipe-image" src={recipe.image.url}></img>
            </div>
            <div >
              <img class="favoriteIcon" src={A_IconBookmark}></img>
            </div>
              <A_TextBodyCards name={recipe.name}/>
            <div style={{ display: "flex", padding: "16px" }}>
              <div style={{ marginRight: "10px"}}>
                <M_TextAndIcon
                  icon={A_IconTime}
                  text={recipe.time}
                />
              </div>
              <M_TextAndIcon
                icon={A_IconDifficulty}
                text={recipe.title}
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
