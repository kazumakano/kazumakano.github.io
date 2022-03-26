import papers from "../public/papers.json"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "./datetime"
import { CopyBtn } from "../components/button"


type PublicationTableProps = {
  isInternational: boolean
} 

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
}
