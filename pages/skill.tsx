import type { ComponentProps } from "./_app"
import Layout from "../components/layout"


export default function Skill({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <p>This is skill page.</p>
    </Layout>
  )
}
