import papers from "../public/papers.json"
import Table from "react-bootstrap/Table"
import { CopyBtn } from "../components/button"


type PublicationTableProps = {
  isInternational: boolean
} 

const dateTimeFormat = new Intl.DateTimeFormat(
  "en-US",
  {
    month: "short",
    year: "numeric"
  }
)

export default function PublicationTable({ isInternational }: PublicationTableProps): JSX.Element {
  return (
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
          <td>{dateTimeFormat.format(new Date(p.date[0], p.date[1] - 1))}</td>
          <td>{p.title}</td>
          <td>{p.conference}</td>
          <td>{p.authorship}</td>
          <td><CopyBtn text={p.title} /></td>
        </tr>
      ))}
    </tbody>
  </Table>
  )
}
