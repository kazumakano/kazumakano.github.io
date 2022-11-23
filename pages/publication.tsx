import papers from "../public/papers.json"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../components/datetime"
import { CopyBtn } from "../components/button"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"


type PublicationTableProps = {
  isInternational: boolean
} 

const PublicationTable = ({ isInternational }: PublicationTableProps) => (
  <Table hover striped>
    <thead>
      <tr>
        <th>date</th>
        <th>title</th>
        <th>conference</th>
        <th>authorship</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {(isInternational ? papers.international : papers.domestic).map((p, i) => (
        <tr key={i}>
          <td>{getFormattedDate(p.date[1], p.date[0])}</td>
          <td>{p.title}</td>
          <td>{p.conference}</td>
          <td>{p.authorship}</td>
          <td><CopyBtn text={p.title} /></td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default function Publication({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="publication">
      <TextBox enableMargins={[false, false]} proportion={100}>
        <h2>international</h2>
        <PublicationTable isInternational={true} />

        <h2>domestic</h2>
        <PublicationTable isInternational={false} />

        <h2 className="no-caps">Poster etc.</h2>
        <Table hover striped>
          <thead>
            <tr>
              <th>date</th>
              <th>title</th>
              <th>conference</th>
            </tr>
          </thead>
          <tbody>
            {papers.poster.map((p, i) => (
              <tr key={i}>
                <td>{getFormattedDate(p.date[1], p.date[0])}</td>
                <td>{p.title}</td>
                <td>{p.conference}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TextBox>
    </Layout>
  )
}
