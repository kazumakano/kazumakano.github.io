import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import PublicationTable from "../components/publication-table"


export default function Publication({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="publication">
      <TextBox enableMargins={[false, false]} proportion={100}>
        <h2>international</h2>
        <PublicationTable isInternational={true} />

        <h2>Domestic</h2>
        <PublicationTable isInternational={false} />
      </TextBox>
    </Layout>
  )
}
