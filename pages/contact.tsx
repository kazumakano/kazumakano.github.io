import type { ComponentProps } from "./_app"
import { useState } from "react"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import Link from "next/link"


export default function Contact({ setIsInputting, pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  const [mailBody, setMailBody] = useState<string>("")
  const [mailSubject, setMailSubject] = useState<string>("")

  const uri = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${mailSubject}&body=${mailBody}`.replace(/\n/g, "%0d%0a")

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>social</h2>
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>mail</h2>
        <label htmlFor="mail-subject">subject</label>
        <input
          id="mail-subject"
          onBlur={() => setIsInputting(false)}
          onChange={event => setMailSubject(event.target.value)}
          onFocus={() => setIsInputting(true)}
          type="text"
        />

        <label htmlFor="mail-body">body</label>
        <textarea
          id="mail-body"
          onBlur={() => setIsInputting(false)}
          onChange={event => setMailBody(event.target.value)}
          onFocus={() => setIsInputting(true)}
        />

        <Link href={uri}>
          <input type="submit" />
        </Link>
      </TextBox>
    </Layout>
  )
}