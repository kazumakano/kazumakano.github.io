import styles from "../styles/Error.module.css"
import type { ErrorProps } from "next/error"
import type { NextPageContext } from "next"


export default function Error({ statusCode }: ErrorProps): JSX.Element {
  return (
    <>
      <span className={styles.code}>{statusCode}</span>
      <span className={styles.msg}>
        {`An error occurred on ${statusCode ? "server" : "client"}`}
      </span>
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
