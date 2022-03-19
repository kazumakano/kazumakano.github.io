import papers from "../public/papers.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { CopyBtn } from "../components/button"


const dateTimeFormat = new Intl.DateTimeFormat(
  "en-US",
  {
    month: "short",
    year: "numeric"
  }
)

export default function Publication({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="publication">
      <TextBox enableMargins={[false, false]} proportion={100}>
        <h2>international</h2>
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
            {papers.map((p, i) => (
              <tr key={i}>
                <td>{dateTimeFormat.format(new Date(p.date[0], p.date[1] - 1))}</td>
                <td>{p.title}</td>
                <td>{p.conference}</td>
                <td>{p.authorship}</td>
                <td><CopyBtn text={p.title} /></td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>Domestic</h2>
      </TextBox>
    </Layout>
  )
}
