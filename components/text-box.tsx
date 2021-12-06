import type { ReactNode } from "react"


interface TextBoxProps {
  children: ReactNode
}

export default function TextBox({ children }: TextBoxProps): JSX.Element {
  return (
    <div className="text-box whole-text-box">
      <div className="text">
        {children}
      </div>
    </div>
  )
}

export function HalfTextBox({ children }: TextBoxProps): JSX.Element {
  return (
    <div className="text-box half-text-box">
      <div className="text">
        {children}
      </div>
    </div>
  )
}
