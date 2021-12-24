import styles from "../styles/Home.module.css"
import history from "../public/history.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Table from "react-bootstrap/Table"
import { RoundImg } from "../components/image"

const IMG_SRC = `https://github.com/${process.env.NEXT_PUBLIC_USER_NAME}.png`

export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="about me">
      <TextBox enableMargins={[false, true]} proportion={70}>
        <h2>history</h2>
        <Table borderless id={styles.eduTable}>
          <tbody>
            {history.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.year}</td>
                  <td>{v.desc}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        
        <h2>experience</h2>
      </TextBox>
      <RoundImg enableMargins={[true, false]} proportion={30} src={IMG_SRC} />
    </Layout>
  )
}
