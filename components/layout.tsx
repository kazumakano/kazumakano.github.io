import type { ComponentProps } from "../pages/_app"
import type { ReactNode } from "react"
import ProgressIcon from "./progress-icon"
import Slide from "./slide"
import Header from "./header"
import Body from "./body"
import TextBox, { HalfTextBox } from "./text-box"
import { HalfImg } from "./image"


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
          <TextBox>
            {children}
          </TextBox>
        </Body>
      </Slide>
    </div>
  )
}

interface TextAndImgLayoutProps extends LayoutProps {
  imgSrc: string
}

export function TextAndImgLayout({ pageIndex, transDirect, setPage, children, title, imgSrc }: TextAndImgLayoutProps): JSX.Element {
  return (
    <div className="container">
      <ProgressIcon pageIndex={pageIndex} transDirect={transDirect} />

      <Slide pageIndex={pageIndex} transDirect={transDirect} setPage={setPage}>
        <Header title={title} />

        <Body>
          <HalfTextBox>
            {children}
          </HalfTextBox>

          <HalfImg src={imgSrc} />
        </Body>
      </Slide>
    </div>
  )
}
