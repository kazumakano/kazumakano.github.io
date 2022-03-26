import styles from "../styles/Home.module.css"
import history from "../public/history.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { RoundImg } from "../components/image"


export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="about me">
      <TextBox enableMargins={[false, true]} proportion={70}>
        <p className={styles.name}>I&apos;m Kazuma Kano</p>

        <h2>education</h2>
        <Table borderless className={styles.eduTable}>
          {history.map((h, i) => (
            <tbody key={i}>
              <tr>
                <td rowSpan={2}>{h.term[0]}</td>
                <td rowSpan={2}>~</td>
                <td rowSpan={2}>{h.term[1]}</td>
                <td>{h.department}</td>
              </tr>
              <tr>
                <td>{h.school}</td>
              </tr>
            </tbody>
          ))}
        </Table>

        <h2>experience</h2>
      </TextBox>

      <RoundImg alt="avatar" enableMargins={[true, false]} proportion={30} src={`https://github.com/${process.env.NEXT_PUBLIC_USER_NAME}.png`} />
    </Layout>
  )
}
