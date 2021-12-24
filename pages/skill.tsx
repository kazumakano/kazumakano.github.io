import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"


export default function Skill({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox>
      This is skill page.
      </TextBox>
    </Layout>
  )
}
