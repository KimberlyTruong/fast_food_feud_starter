import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabelFact from "./components/NutritionalLabel/NutritionalLabel"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [categorySelected, setCategories] = React.useState(null)
  const [restaurantSelected, setRestaurant] = React.useState(null)
  const [menuItemSelected, setMenuItem] = React.useState(null)

  const selectCategory = (event) => {
    setCategories(event.currentTarget.children[0].id)
  }

  const selectRestaurant = (event) => {
    setRestaurant(event.currentTarget.children[0].id)
  }

  const selectMenuItem = (event) => {
    setMenuItem(event.currentTarget.children[0].id)
  }

  var currentMenuItems = data.filter(item => (
    (item.food_category === categorySelected) && (item.restaurant === restaurantSelected)
  ))

  var chosenItemData = null;

  for(let i = 0; i < data.length; i++){
    if (data[i].item_name === menuItemSelected){
      chosenItemData = data[i]
      console.log(chosenItemData)
      break
    }
  }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>

          {/* Map over categories. create <Chip key="${category name}"></Chip> for each one*/}

          {categories.map((category) => (
            <Chip label={category} isActive={category === categorySelected} select={selectCategory}/>
          ))}

        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant) => (
              <Chip label={restaurant} isActive={restaurant === restaurantSelected} select={selectRestaurant}/>
            ))}
          </div>
        </div>

        <Instructions instructions={appInfo.instructions}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item) => (
              <Chip label={item.item_name} isActive={item.item_name === menuItemSelected} select={selectMenuItem}/>
            ))}
          </div>

          {/* NUTRITION FACTS */}
          {(chosenItemData != null) && (<div className="NutritionFacts nutrition-facts">
              <NutritionalLabelFact itemInformation = {chosenItemData}/>
          </div>)}

        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
