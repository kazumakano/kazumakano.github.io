import contents from "../public/contents.json"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import { useCallback, useContext, useState } from "react"
import { IsPcCtx } from "./client"
import { useRouter } from "next/router"
import { CONTENTS_NUM } from "../pages/_app"
import Slide from "./slide"
import ProgressIcon from "./progress-icon"


type MvBtnProps = {
  isLeft: boolean
  pageIndex: number
  setTransDirect: Dispatch<SetStateAction<number>>
}

const leftIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
  </svg>
)

const rightIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
  </svg>
)

const MvBtn = ({ isLeft, pageIndex, setTransDirect }: MvBtnProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
  const isPc = useContext(IsPcCtx)
  const router = useRouter()

  const onClick = useCallback((direct: number) => {
    setTransDirect(direct)
    const nextPageIndex = (((pageIndex + direct) % CONTENTS_NUM) + CONTENTS_NUM) % CONTENTS_NUM
    router.replace(contents[nextPageIndex])
  }, [pageIndex, router, setTransDirect])

  return (
    <div
      className="mv-btn"
      onClick={() => onClick(isLeft ? -1 : 1)}
      onMouseEnter={useCallback(() => setIsMouseOver(true), [setIsMouseOver])}
      onMouseLeave={useCallback(() => setIsMouseOver(false), [setIsMouseOver])}
      style={{
        left: isLeft ? "0%" : "92%",
        opacity: isPc ? isMouseOver ? 1 : 0 : 1
      }}
    >
      {isLeft ? leftIcon : rightIcon}
    </div>
  )
}

type LayoutProps = {
  children: ReactNode
  pageIndex: number
  transDirect: number
  setTransDirect: Dispatch<SetStateAction<number>>
  title: string
  noCapsHeader?: boolean
}

export default function Layout({ children, pageIndex, transDirect, setTransDirect, title, noCapsHeader }: LayoutProps): JSX.Element {
  return (
    <>
      <Slide pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect}>
        <div id="header">
          <h1 className={noCapsHeader ? "no-caps" : undefined}>{title}</h1>
        </div>

        <div id="body">
          {children}
        </div>
      </Slide>

      <ProgressIcon pageIndex={pageIndex} transDirect={transDirect} />
      <MvBtn isLeft={true} pageIndex={pageIndex} setTransDirect={setTransDirect} />
      <MvBtn isLeft={false} pageIndex={pageIndex} setTransDirect={setTransDirect} />
    </>
  )
}
