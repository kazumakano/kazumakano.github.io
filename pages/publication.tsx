import styles from "../styles/Publication.module.css"
import papers from "../public/papers.json"
import type { ReactNode } from "react"
import Link from "next/link"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../functions/utility"
import { CopyBtn } from "../components/button"
import type { ComponentProps } from "./_app"
import { useRef } from "react"
import usePinch from "../hooks/pinch"
import Layout from "../components/layout"
import TextBox from "../components/text-box"


type LinkedTdProps = {
  children: ReactNode
  url: string
}

const LinkedTd = ({ children, url }: LinkedTdProps) => (
  <td>
    <Link href={url} target="_blank">
      {children}
    </Link>
  </td>
)

type PublicationTableProps = {
  isInternational: boolean
} 

const PublicationTable = ({ isInternational }: PublicationTableProps) => (
  <Table className={styles.pubTable} hover striped>
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
          {p.paperUrl ? <LinkedTd url={p.paperUrl}>{p.title}</LinkedTd> : <td>{p.title}</td>}
          <td>{p.type}</td>
          {p.conferenceUrl ? <LinkedTd url={p.conferenceUrl}>{p.conference}</LinkedTd> : <td>{p.conference}</td>}
          <td>{p.authorship}</td>
          <td><CopyBtn text={p.title} /></td>
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
    <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title="publications & presentations">
      <TextBox enableMargins={[false, false]} proportion={100} innerRef={pinchTgtRef} outerRef={pinchSrcRef}>
        <h2>international</h2>
        <PublicationTable isInternational={true} />

        <h2>domestic</h2>
        <PublicationTable isInternational={false} />
      </TextBox>
    </Layout>
  )
}
