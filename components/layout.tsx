import type { ComponentProps } from "../pages/_app"
import Slider from "./slider"


export default function Layout({ children, pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Slider pageIndex={pageIndex} transDirect={transDirect} setPage={setPage}>
      {children}
    </Slider>    
  )
}
