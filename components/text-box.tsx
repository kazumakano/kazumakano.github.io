import type { ReactNode, RefObject } from "react"
import { useBlockStyle } from "./client"


type TextBoxProps = {
  children: ReactNode
  enableMargins: [boolean, boolean]
  proportion: number
  innerRef?: RefObject<HTMLDivElement>
  outerRef?: RefObject<HTMLDivElement>
}

export default function TextBox({ children, enableMargins, proportion, innerRef, outerRef }: TextBoxProps): JSX.Element {
  return (
    <div className="text-box" ref={outerRef} style={useBlockStyle(enableMargins, proportion)}>
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  )
}
