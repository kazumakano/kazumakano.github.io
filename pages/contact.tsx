import styles from "../styles/Contact.module.css"
import type { ComponentProps } from "./_app"
import { useCallback, useState } from "react"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import { MailerBtn } from "../components/button"


export default function Contact({ setIsInputting, pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  const [mailBody, setMailBody] = useState<string>("")
  const [mailSubject, setMailSubject] = useState<string>("")

  const getUri = useCallback(() => {
    let uri = `mailto:${process.env.NEXT_PUBLIC_EMAIL}`

    if (mailBody != "" && mailSubject != "") {
      uri += `?body=${mailBody}&subject=${mailSubject}`
    }
    else if (mailBody != "") {
      uri += `?body=${mailBody}`
    }
    else if (mailSubject != "") {
      uri += `?subject=${mailSubject}`
    }

    return uri
  }, [mailBody, mailSubject])

  const uri = getUri()

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>social</h2>
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>mail</h2>
        <div className={styles.mailForm}>
          <div>
            <label htmlFor="mail-subject">subject</label>
            <input
              autoComplete="off"
              id="mail-subject"
              onBlur={() => setIsInputting(false)}
              onChange={event => setMailSubject(event.target.value)}
              onFocus={() => setIsInputting(true)}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="mail-body">body</label>
            <textarea
              id="mail-body"
              onBlur={() => setIsInputting(false)}
              onChange={event => setMailBody(event.target.value.replace(/\n/g, "%0d%0a"))}
              onFocus={() => setIsInputting(true)}
            />
          </div>

          <MailerBtn uri={uri} />
        </div>
      </TextBox>
    </Layout>
  )
}
