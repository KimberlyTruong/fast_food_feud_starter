import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const factLabels = ["calories", "carbohydrates", "cholesterol", "dietary_fiber", "protein", "saturated_fat", "serving_size", "serving_size_unit", "sodium", "sugar", "total_fat", "trans_fat"]

  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.itemInformation.item_name}</h4>

      {/* Repeat for all facts in the nutritional label */}

      {factLabels.map((factLabel) => (
        <ul className="fact-list"><NutritionalLabelFact fact = {factLabel} itemInformation={props.itemInformation}/></ul>
      ))}

    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact" key={props.itemInformation.item_name} attribute={props.fact}>
      <span className="fact-label">{props.fact}</span>{" "}
      <span className="fact-value">{props.itemInformation[props.fact]}</span>
    </li>
  )
}

export default NutritionalLabel
