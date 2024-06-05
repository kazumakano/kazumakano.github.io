import styles from "../styles/Achievement.module.css"
import achieves from "../public/achievements.json"
import type { ReactNode } from "react"
import type { ComponentProps } from "./_app"
import { useRef } from "react"
import usePinch from "../hooks/pinch"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../functions/utility"
import Link from "next/link"


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

export default function Achievement({ pageIndex, transDirect, setTransDirect }: ComponentProps): JSX.Element {
  const pinchSrcRef = useRef<HTMLDivElement>(null)
  const pinchTgtRef = useRef<HTMLDivElement>(null)

  usePinch(pinchSrcRef, pinchTgtRef)

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title="achievements">
      <TextBox enableMargins={[false, false]} proportion={100} innerRef={pinchTgtRef} outerRef={pinchSrcRef}>
        <h2>awards</h2>
        <Table borderless className={styles.achieveTable}>
          <tbody>
            {achieves.award.map((a, i) => (
              <tr key={i}>
                <td>{getFormattedDate(a.date[1], a.date[0])}</td>
                {a.url ? <LinkedTd url={a.url}>{a.title}</LinkedTd> : <td>{a.title}</td>}
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>qualifications</h2>
        <Table borderless className={styles.achieveTable}>
          <tbody>
            {achieves.qualification.map((q, i) => (
              <tr key={i}>
                <td>{getFormattedDate(q.date[1], q.date[0])}</td>
                <LinkedTd url={q.url}>
                  {q.title}
                </LinkedTd>
              </tr>
            ))}
          </tbody>
        </Table>
      </TextBox>
    </Layout>
  )
}
