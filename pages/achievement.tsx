import styles from "../styles/Achievement.module.css"
import achieves from "../public/achievements.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { getFormattedDate } from "../hooks/datetime"
import Link from "next/link"


export default function Achievement({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="achievement">
      <TextBox enableMargins={[false, false]} proportion={100}>
        <h2>award</h2>
        <Table borderless>
          <tbody>
            {achieves.award.map((a, i) => (
              <tr key={i}>
                <td>{getFormattedDate(a.date[1], a.date[0])}</td>
                <td>{a.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>qualification</h2>
        <Table borderless className={styles.qualTable}>
          <tbody>
            {achieves.qualification.map((q, i) => (
              <tr key={i}>
                <td>{getFormattedDate(q.date[1], q.date[0])}</td>
                <td>
                  <Link href={q.url}>
                    <a target="_blank">
                      {q.title}
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TextBox>
    </Layout>
  )
}
