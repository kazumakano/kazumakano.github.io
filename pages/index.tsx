import styles from "../styles/Home.module.css"
import history from "../public/history.json"
import type { ReactNode } from "react"
import Link from "next/link"
import type { ComponentProps } from "./_app"
import { useContext, useEffect, useRef, useState } from "react"
import { IsPcCtx } from "../components/client"
import usePinch from "../hooks/pinch"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../functions/utility"
import { RoundImg } from "../components/image"

const HINT_DELAY = 5000
const TAGS = [
  "indoor positioning",
  "activity recognition",
  "deep learning"
]

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

const rightIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
  </svg>
)

export default function Home({ pageIndex, transDirect, setTransDirect }: ComponentProps): JSX.Element {
  const [hintMsg, setHintMsg] = useState<JSX.Element>(<></>)
  const isPc = useContext(IsPcCtx)
  const pinchSrcRef = useRef<HTMLDivElement>(null)
  const pinchTgtRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timerId = window.setTimeout(setHintMsg, HINT_DELAY, (
      <div className={styles.hintMsg}>
        <p>
          press <kbd>Enter</kbd> or swipe {rightIcon}
        </p>
      </div>
    ))

    return () => window.clearTimeout(timerId)
  }, [setHintMsg])

  usePinch(pinchSrcRef, pinchTgtRef)

  return (
    <>
      {isPc ? hintMsg : null}

      <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title="biography">
        <TextBox enableMargins={[false, true]} proportion={70} innerRef={pinchTgtRef} outerRef={pinchSrcRef}>
          <p className={styles.greeting}>Kazuma KANO / 加納 一馬</p>
          <ul className={styles.tags}>
            {TAGS.map((t, i) => <li key={i}>{t}</li>)}
          </ul>

          <h2>education</h2>
          <Table borderless className={styles.eduTable}>
            {history.education.map((h, i) => (
              <tbody key={i}>
                <tr>
                  <td rowSpan={2}>{getFormattedDate(h.term[0]?.[1], h.term[0]?.[0])}</td>
                  <td rowSpan={2}>~</td>
                  <td rowSpan={2}>{getFormattedDate(h.term[1]?.[1], h.term[1]?.[0])}</td>
                  <LinkedTd url={h.url}>{h.department}</LinkedTd>
                </tr>
                <tr>
                  <LinkedTd url={h.url}>{h.school}</LinkedTd>
                </tr>
              </tbody>
            ))}
          </Table>

          <h2>activities</h2>
          <Table borderless className={styles.expTable}>
            <tbody>
              {history.activity.map((h, i) => (
                <tr key={i}>
                  <td>{getFormattedDate(h.term[0]?.[1], h.term[0]?.[0])}</td>
                  <td>~</td>
                  <td>{getFormattedDate(h.term[1]?.[1], h.term[1]?.[0])}</td>
                  <LinkedTd url={h.url}>{h.title}</LinkedTd>
                </tr>
              ))}
            </tbody>
          </Table>
        </TextBox>

        <RoundImg alt="avatar" enableMargins={[true, false]} proportion={30} src="/portrait.jpeg" />
      </Layout>
    </>
  )
}
