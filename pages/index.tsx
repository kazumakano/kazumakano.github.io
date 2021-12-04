import type { ComponentProps } from "./_app"
import { TextAndImgLayout } from "../components/layout"


export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  const imgSrc = "https://github.com/" + process.env.NEXT_PUBLIC_USER_NAME + ".png"

  return (
    <TextAndImgLayout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="home" imgSrc={imgSrc}>
      <p>This is home page.</p>
    </TextAndImgLayout>
  )
}
