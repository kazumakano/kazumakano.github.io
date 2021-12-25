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
        <h2>education</h2>
        <Table borderless id={styles.eduTable}>
          {history.map((v, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td rowSpan={2}>{v.year[0]}</td>
                  <td rowSpan={2}>~</td>
                  <td rowSpan={2}>{v.year[1]}</td>
                  <td>{v.department}</td>
                </tr>
                <tr>
                  <td>{v.school}</td>
                </tr>
              </tbody>
            )
          })}
        </Table>

        <h2>experience</h2>
      </TextBox>

      <RoundImg enableMargins={[true, false]} proportion={30} src={`https://github.com/${process.env.NEXT_PUBLIC_USER_NAME}.png`} />
    </Layout>
  )
}
