import papers from "../public/papers.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
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
      <h2>international</h2>
      <Table hover responsive striped>
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {papers.map((v, i) => {
            const date = new Date()
            date.setFullYear(v.date[0], v.date[1] - 1)

            return (
              <tr key={i}>
                <td>{dateTimeFormat.format(date)}</td>
                <td>{v.title}</td>
                <td><CopyBtn text={v.title} /></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Layout>
  )
}
