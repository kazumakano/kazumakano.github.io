import type { ReactNode } from "react"
import { useBlockStyle } from "./client"


type TextBoxProps = {
  children: ReactNode
  enableMargins: [boolean, boolean]
  proportion: number
}

export default function TextBox({ children, enableMargins, proportion }: TextBoxProps): JSX.Element {
  return (
    <div className="text-box" style={useBlockStyle(enableMargins, proportion)}>
      <div>
        {children}
      </div>
    </div>
  )
}
