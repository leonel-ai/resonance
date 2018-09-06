import React from "react"
import QuoteSlide from "../QuoteSlide"

export default props => {
  return (
    <QuoteSlide
      next={props.next}
      previous={props.previous}
      quote="WHAT WILL IT TAKE?"
    />
  )
}
