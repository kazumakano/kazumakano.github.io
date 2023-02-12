import type { Dispatch, ReactNode, SetStateAction } from "react"
import Slide from "./slide"
import Header from "./header"
import Body from "./body"
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
        <Header title={title} noCaps={noCapsHeader} />

        <Body>
          {children}
        </Body>
      </Slide>

      <ProgressIcon pageIndex={pageIndex} transDirect={transDirect} />
    </>
  )
}
