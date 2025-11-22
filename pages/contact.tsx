import styles from "../styles/Contact.module.css"
import type { ComponentProps } from "./_app"
import { useCallback, useMemo, useState } from "react"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import { SocialGrid, SocialTile } from "../components/social-tiles"
import { CopyBtn, MailerBtn, SwapBtn } from "../components/button"


const mailAddrList = process.env.NEXT_PUBLIC_EMAIL == null ? [] : process.env.NEXT_PUBLIC_EMAIL.split(",")

const githubIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const scholarIcon = (
  <svg viewBox="0 0 512 512">
    <defs>
      <mask id="shadow">
        <rect fill="white" height="100%" width="100%" />
        <path d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z" fill="black" />
      </mask>
    </defs>
    <g mask="url(#shadow)">
      <path d="M256 411.12L0 202.667 256 0 512 202.667z" />
      <circle cx="256" cy="362.667" r="149.333" />
    </g>
  </svg>
)

const twitterIcon = (
  <svg viewBox="0 0 248 204">
    <g>
      <path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z" />
    </g>
  </svg>
)

export default function Contact({ setIsInputting, pageIndex, transDirect, setTransDirect }: ComponentProps): JSX.Element {
  const [mailAddrIdx, setMailAddrIdx] = useState<number>(0)
  const [mailBody, setMailBody] = useState<string>("")
  const [mailSubject, setMailSubject] = useState<string>("")

  const onChange = useCallback(event => setMailBody(event.target.value.replace(/\n/g, "%0d%0a")), [setMailBody])
  const onClickSwapBtn = useCallback(() => setMailAddrIdx((mailAddrIdx + 1) % mailAddrList.length), [mailAddrIdx, setMailAddrIdx])

  const uri = useMemo(() => {
    let uri = `mailto:${mailAddrList[mailAddrIdx]}`
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
  }, [mailAddrIdx, mailBody, mailSubject])

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title="contact">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>email</h2>
        <div className={styles.mailForm}>
          <div>
            <label htmlFor="mail-to">to</label>
            <div>
              <SwapBtn onClick={onClickSwapBtn} />
              <select disabled id="mail-to" value={mailAddrList[mailAddrIdx]}>
                {mailAddrList.map((a, i) => (
                  <option key={i} value={a}>{a}</option>
                ))}
              </select>
              <CopyBtn text={mailAddrList[mailAddrIdx]} />  
            </div>
          </div>

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
              onBlur={useCallback(() => setIsInputting(false), [setIsInputting])}
              onChange={onChange}
              onFocus={useCallback(() => setIsInputting(true), [setIsInputting])}
            />
          </div>

          <MailerBtn uri={uri} />
        </div>
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>social</h2>
        <SocialGrid>
          <SocialTile color="#1d9bf0" icon={twitterIcon} reverse={false} url={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USER_NAME}`}>
            Twitter<br />
            @{process.env.NEXT_PUBLIC_TWITTER_USER_NAME}
          </SocialTile>
          <SocialTile color="black" icon={githubIcon} reverse={true} url={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER_NAME}`}>
            GitHub<br />
            @{process.env.NEXT_PUBLIC_GITHUB_USER_NAME}
          </SocialTile>
          <SocialTile color="#a0c3ff" icon={scholarIcon} reverse={false} url={`https://scholar.google.co.jp/citations?user=${process.env.NEXT_PUBLIC_SCHOLAR_USER_ID}`}>
            Google Scholar
          </SocialTile>
        </SocialGrid>
      </TextBox>
    </Layout>
  )
}
