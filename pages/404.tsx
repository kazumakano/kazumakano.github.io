import styles from "../styles/404.module.css"


export default function Custom404(): JSX.Element {
  return (
    <>
      <span className={styles.code}>404</span>
      <span className={styles.msg}>
        This page could not be found.
      </span>
    </>
  )
}
