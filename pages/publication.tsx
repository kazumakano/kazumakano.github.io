import papers from "../public/papers.json"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../functions/utility"
import { CopyBtn } from "../components/button"
import type { ComponentProps } from "./_app"
import { useRef } from "react"
import usePinch from "../hooks/pinch"
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
        <th>type</th>
        <th>conf / journal</th>
        <th>authorship</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {(isInternational ? papers.international : papers.domestic).map((p, i) => (
        <tr key={i}>
          <td>{getFormattedDate(p.date[1], p.date[0])}</td>
          <td>{p.title}</td>
          <td>{p.type}</td>
          <td>{p.conference}</td>
          <td>{p.authorship}</td>
          <td>
            {p.type == "article" || p.type == "proceedings" ? <CopyBtn text={p.title} /> : null}
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default function Publication({ pageIndex, transDirect, setTransDirect }: ComponentProps): JSX.Element {
  const pinchSrcRef = useRef<HTMLDivElement>(null)
  const pinchTgtRef = useRef<HTMLDivElement>(null)

  usePinch(pinchSrcRef, pinchTgtRef)

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title="Publication & Presentation">
      <TextBox enableMargins={[false, false]} proportion={100} innerRef={pinchTgtRef} outerRef={pinchSrcRef}>
        <h2>international</h2>
        <PublicationTable isInternational={true} />

        <h2>domestic</h2>
        <PublicationTable isInternational={false} />
      </TextBox>
    </Layout>
  )
}
