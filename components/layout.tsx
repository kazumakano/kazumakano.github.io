import type { Dispatch, ReactNode, SetStateAction } from "react"
import Slide from "./slide"
import ProgressIcon from "./progress-icon"


type LayoutProps = {
  children: ReactNode
  pageIndex: number
  transDirect: number
  setPage: Dispatch<SetStateAction<[number, number]>>
  title: string
  noCapsHeader?: boolean
}

export default function Layout({ children, pageIndex, transDirect, setPage, title, noCapsHeader }: LayoutProps): JSX.Element {
  return (
    <>
      <Slide pageIndex={pageIndex} transDirect={transDirect} setPage={setPage}>
        <div id="header">
          <h1 className={noCapsHeader ? "no-caps" : undefined}>{title}</h1>
        </div>

        <div id="body">
          {children}
        </div>
      </Slide>

      <ProgressIcon pageIndex={pageIndex} transDirect={transDirect} />
    </>
  )
}
