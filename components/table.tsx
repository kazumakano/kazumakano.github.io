import styles from "../styles/Table.module.css"
import { useMemo, type ReactNode } from "react"
import Link from "next/link"
import Table from "react-bootstrap/Table"
import { download2view, getFormattedDate } from "../functions/utility"
import { AttachBtn, CopyBtn, PdfBtn } from "./button"


type LinkedTdProps = {
  children: ReactNode
  url: string
}

export function LinkedTd({ children, url }: LinkedTdProps): JSX.Element {
  return (
    <td>
      <Link href={url} target="_blank">
        {children}
      </Link>
    </td>
  )
}

export type Paper = {
  authorship: "co-author" | "lead author" | null
  conference: string | null
  date: [number, number]
  title: string
  type: string
  conferenceUrl?: string
  paperUrl?: string
  pdfUrl?: string
  pdfDlUrl?: string
  attachUrl?: string
  attachDlUrl?: string
}

type PubTabProps = {
  papers: Paper[]
}

export function PubTab({ papers }: PubTabProps): JSX.Element {
  const enablePdfCol = useMemo(() => papers.some(p => p.pdfUrl || p.pdfDlUrl), [papers])
  const enableAttachCol = useMemo(() => papers.some(p => p.attachUrl || p.attachDlUrl), [papers])

  return (
    <Table className={styles.pubTab} hover striped>
      <thead>
        <tr>
          <th>date</th>
          <th>title</th>
          <th>type</th>
          <th>conf / journal</th>
          <th>authorship</th>
          <th></th>
          {enablePdfCol ? <th></th> : <></>}
          {enableAttachCol ? <th></th> : <></>}
        </tr>
      </thead>
      <tbody>
        {papers.toReversed().map((p, i) => (
          <tr key={i}>
            <td>{getFormattedDate(p.date[1], p.date[0])}</td>
            {p.paperUrl ? <LinkedTd url={p.paperUrl}>{p.title}</LinkedTd> : <td>{p.title}</td>}
            <td>{p.type}</td>
            {p.conferenceUrl ? <LinkedTd url={p.conferenceUrl}>{p.conference}</LinkedTd> : <td>{p.conference}</td>}
            <td>{p.authorship}</td>
            <td><CopyBtn text={p.title} /></td>
            {enablePdfCol ? p.pdfUrl ? <td><PdfBtn uri={p.pdfUrl} /></td> : p.pdfDlUrl ? <td><PdfBtn uri={download2view(p.pdfDlUrl)} /></td> : <td></td> : <></>}
            {enableAttachCol ? p.attachUrl ? <td><AttachBtn uri={p.attachUrl} /></td> : p.attachDlUrl ? <td><AttachBtn uri={download2view(p.attachDlUrl)} /></td> : <td></td> : <></>}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
