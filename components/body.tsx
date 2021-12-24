import type { ReactNode } from "react";


type BodyProps = {
  children: ReactNode
}

export default function Body({ children }: BodyProps): JSX.Element {
  return (
    <div id="body">
      {children}
    </div>
  )
}
