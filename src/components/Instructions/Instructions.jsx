import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.instructions.start} {props.instructions.onlyCategory} {props.instructions.noSelectedItem} {props.instructions.allSelected}</p>
    </aside>
  )
}

export default Instructions
