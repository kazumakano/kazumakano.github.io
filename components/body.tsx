import type { ReactNode } from "react";


interface BodyProps {
  children: ReactNode
}

export default function Body({ children }: BodyProps): JSX.Element {
  return (
    <div className="body">
      {children}
    </div>
  )
}

export function HalfBody({ children }: BodyProps): JSX.Element {
  return (
    <div className="half-body">
      {children}
    </div>
  )
}
