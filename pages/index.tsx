import type { ComponentProps } from "./_app"
import { TextAndImgLayout } from "../components/layout"

const IMG_SRC = "https://github.com/" + process.env.NEXT_PUBLIC_USER_NAME + ".png"

export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <TextAndImgLayout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="about me" imgSrc={IMG_SRC}>
      This is home page.
    </TextAndImgLayout>
  )
}
