import type { ComponentProps } from "./_app"
import { HomeLayout } from "../components/layout"


export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <HomeLayout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="home">
      <p>This is home page.</p>
    </HomeLayout>
  )
}
