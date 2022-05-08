import styles from "../styles/Home.module.css"
import history from "../public/history.json"
import type { ReactNode } from "react"
import Link from "next/link"
import type { ComponentProps } from "./_app"
import { useEffect, useState } from "react"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../components/datetime"
import { RoundImg } from "../components/image"

const HINT_DELAY = 5000

type LinkedTdProps = {
  children: ReactNode
  url: string
}

const LinkedTd = ({ children, url }: LinkedTdProps) => (
  <td>
    <Link href={url}>
      <a target="_blank">
        {children}
      </a>
    </Link>
  </td>
)

const rightIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
  </svg>
)

export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  const [hintMsg, setHintMsg] = useState<JSX.Element>(<></>)

  useEffect(() => {
    window.setTimeout(setHintMsg, HINT_DELAY, (
      <div className={styles.hintMsg}>
        <p>
          press <kbd>Enter</kbd> or swipe {rightIcon}
        </p>
      </div>
    ))
  }, [setHintMsg])

  return (
    <>
      <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="about me">
        <TextBox enableMargins={[false, true]} proportion={70}>
          <p className={styles.greeting}>
            kazuma kano<br />
            engineering student
          </p>

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

          <h2>experience</h2>
          <Table borderless className={styles.expTable}>
            <tbody>
              {history.experience.map((h, i) => (
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

        <RoundImg alt="avatar" enableMargins={[true, false]} proportion={30} src={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}.png`} />
      </Layout>

      {hintMsg}
    </>
  )
}
