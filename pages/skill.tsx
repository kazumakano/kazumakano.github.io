import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import LangBars from "../components/language-bars"
import FrameworkTiles from "../components/framework-tiles"


const downIcon = (
  <svg height="1em" width="1em">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
  </svg>
)

export default function Skill({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>language</h2>
        <p>{downIcon} bytes in public repositories</p>
        <LangBars />
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>framework</h2>
        <FrameworkTiles />
      </TextBox>
    </Layout>
  )
}
