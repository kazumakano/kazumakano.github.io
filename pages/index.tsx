import type { ComponentProps } from "./_app"
import Layout from "../components/layout"


export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="home">
      <p>This is home page.</p>
    </Layout>
  )
}
