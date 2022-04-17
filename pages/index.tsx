import styles from "../styles/Home.module.css"
import history from "../public/history.json"
import type { ReactNode } from "react"
import Link from "next/link"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { RoundImg } from "../components/image"


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

export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="about me">
      <TextBox enableMargins={[false, true]} proportion={70}>
        <p className={styles.greeting}>I&apos;m Kazuma Kano.</p>

        <h2>education</h2>
        <Table borderless className={styles.eduTable}>
          {history.education.map((h, i) => (
            <tbody key={i}>
              <tr>
                <td rowSpan={2}>{h.term[0]}</td>
                <td rowSpan={2}>~</td>
                <td rowSpan={2}>{h.term[1]}</td>
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
                <td>{h.term[0]}</td>
                <td>~</td>
                <td>{h.term[1]}</td>
                <LinkedTd url={h.url}>{h.title}</LinkedTd>
              </tr>
            ))}
          </tbody>
        </Table>
      </TextBox>

      <RoundImg alt="avatar" enableMargins={[true, false]} proportion={30} src={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}.png`} />
    </Layout>
  )
}
