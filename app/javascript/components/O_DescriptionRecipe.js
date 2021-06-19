import React from 'react'
import M_Breadcrumbs from './M_Breadcrumbs'
import A_TextTitle from './A_TextTitle'
import M_DescriptionRecipe from './M_DescriptionRecipe'
import A_Photo from './A_Photo'
import Plate from 'images/recipe_icons/Plate.svg'
import A_TextBody from './A_TextBody'
import M_AuthorLinks from './M_AuthorLinks'
import O_Ingredients from './O_Ingredients'
import A_TextCaption from './A_TextCaption'
import A_RecipeIcon from 'images/recipe_icons/recipe_1.svg'
import A_RecipeIconTwo from 'images/recipe_icons/recipe_2.svg'
import O_Like from './O_Like'
import O_Footer from './O_Footer'


const O_DescriptionRecipe = () => {
  return (
    <>
      <div class="recipe-container">
        <M_Breadcrumbs />
        <A_TextTitle title="kапpезе с тoфу" />
        <M_DescriptionRecipe />
        <A_Photo icon={Plate} />
        <div className= "description-body-recipe">
          <A_TextBody text="Один из самых популярных десертов в мире — брауни был придуман в 1893 году на кухне легендарного отеля Palmer House"/>
        </div>
        <div className="author-block">
          <M_AuthorLinks
            link_1="Рецепт предоставлен"
            link_2="BLAU"
            link_3="Все рецепты автора"
          />
        </div>
        <div className="ingredients-block">
          <O_Ingredients/>
        </div>
        <div className="text-caption-block">
          <div className="recipe-title-two">
            <A_TextCaption name="кaк" />
          </div>
          <div className="recipe-title-two">
            <A_TextCaption name="пригoтоbить" />
          </div>
        </div>
        <div className="recipe-description-block">
          <A_TextCaption name="Все овощи тщательно промойте" />
          <br/>
          <A_TextCaption name="проточной водой и нарежьте." />
        </div>

        <div className="recipe-description-block" style={{padding: "25px 0"}}>
          <A_TextCaption name="Тофу нарежьте кубиками" />
          <br/>
          <A_TextCaption name="и смешайте нарезанные овощи" />
          <br/>
          <A_TextCaption name="с тофу." />
        </div>
        <div>
          <img src={A_RecipeIcon} className="recipe-image-block" />
        </div>

        <div className="recipe-description-block" style={{padding: "25px 0"}}>
          <A_TextCaption name="Посолите салат по вкусу, но не" />
          <br/>
          <A_TextCaption name=" пересолите — тофу достаточно" />
          <br/>
          <A_TextCaption name="соленая." />
        </div>
        <div>
          <img src={A_RecipeIconTwo} className="recipe-image-block" />
        </div>
        <O_Like />
      </div>
      <O_Footer/>
    </>
  )
}

export default O_DescriptionRecipe
