import styles from "../styles/Home.module.css"
import type { ComponentProps } from "./_app"
import { TextAndImgLayout } from "../components/layout"
import Table from "react-bootstrap/Table"

const IMG_SRC = "https://github.com/" + process.env.NEXT_PUBLIC_USER_NAME + ".png"

const eduList = [
  {
    year: 2022,
    desc: "Guraduate Nagoya Univ Engineering"
  },
  {
    year: 2024,
    desc: "Graduate Nagoya Univ"
  }
]

export default function Home({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <TextAndImgLayout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="about me" imgSrc={IMG_SRC}>
      <h2>education</h2>
      <Table borderless responsive id={styles.eduTable}>
        <tbody>
          {eduList.map((v, i) => {
            return (
              <tr>
                <td>{v.year}</td>
                <td>{v.desc}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      
      <h2>experience</h2>
    </TextAndImgLayout>
  )
}
