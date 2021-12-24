import type { ReactNode } from "react"
import getBlockStyle from "./block-style"


type TextBoxProps = {
  children: ReactNode
  enableMargins: [boolean, boolean]
  proportion: number
}

export default function TextBox({ children, enableMargins, proportion }: TextBoxProps): JSX.Element {
  return (
    <div className="text-box" style={getBlockStyle(enableMargins, proportion)}>
      <div className="text">
        {children}
      </div>
    </div>
  )
}
