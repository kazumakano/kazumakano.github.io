import styles from "../styles/Table.module.css"
import type { ReactNode } from "react"
import Link from "next/link"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../functions/utility"
import { CopyBtn } from "./button"


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
  conference: string
  date: [number, number]
  title: string
  type: string
  conferenceUrl: string
  paperUrl?: string
}

type PubTabProps = {
  papers: Paper[]
}

export function PubTab({ papers }: PubTabProps): JSX.Element {
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
        </tr>
      </thead>
      <tbody>
        {papers.sort(
          (p, q) => new Date(q.date[0], q.date[1] - 1).getTime() - new Date(p.date[0], p.date[1] - 1).getTime()
        ).map((p, i) => (
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
}
