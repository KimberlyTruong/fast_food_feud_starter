import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, select }) {

  var buttonClassName = "chip"

  if (isActive){
    buttonClassName += " active"
  }

  return (
    <button onClick={select} className={buttonClassName}>
      <p className="label" id={label}>{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
