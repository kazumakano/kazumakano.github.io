import styles from "../styles/Publication.module.css"
import papers from "../public/papers.json"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import { CopyBtn } from "../components/button"


const dTFormatOpts: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric"
}

export default function Publication({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="publication">
      <table className={styles.paperTable}>
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {papers.map((v, i) => {
            return (
              <tr key={i}>
                <td>{(new Intl.DateTimeFormat("en-US", dTFormatOpts)).format(new Date(v.date))}</td>
                <td>{v.title}</td>
                <td><CopyBtn text={v.title} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}
