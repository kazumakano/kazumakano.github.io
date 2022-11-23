import awards from "../public/awards.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../components/datetime"


export default function Award({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="award">
      <TextBox enableMargins={[false, false]} proportion={100}>
        <Table hover striped>
          <thead>
            <tr>
              <th>date</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((a, i) => (
              <tr key={i}>
                <td>{getFormattedDate(a.date[1], a.date[0])}</td>
                <td>{a.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TextBox>
    </Layout>
  )
}
