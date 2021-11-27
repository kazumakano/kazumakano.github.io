import type { ComponentProps } from "./_app"
import Layout from "../components/layout"


export default function Publication({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage}>
      <p>This is publication page.</p>
    </Layout>
  )
}
