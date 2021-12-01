import type { ComponentProps } from "../pages/_app"
import type { ReactNode } from "react"
import ProgressIcon from "./progress-icon"
import Slide from "./slide"
import Header from "./header"
import Body from "./body"


interface LayoutProps extends ComponentProps {
  children: ReactNode
  title: string
}

export default function Layout({ pageIndex, transDirect, setPage, children, title }: LayoutProps): JSX.Element {
  return (
    <div className="container">
      <ProgressIcon pageIndex={pageIndex} transDirect={transDirect} />

      <Slide pageIndex={pageIndex} transDirect={transDirect} setPage={setPage}>
        <Header title={title} />

        <Body>
          {children}
        </Body>
      </Slide>
    </div>
  )
}
