import styles from "../styles/Skill.module.css"
import { useEffect, useState } from "react"
import type { LangDict } from "../list-all-repos-langs/src/list-all-repos-langs"
import listAllReposLangs from "../list-all-repos-langs/src/list-all-repos-langs"
import Spinner from "react-bootstrap/Spinner"
import ProgressBar from "react-bootstrap/ProgressBar"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"


const useLangs = () => {
  const [langs, setLangs] = useState<LangDict>({}) 
  const getLangs = async () => setLangs(await listAllReposLangs(process.env.NEXT_PUBLIC_USER_NAME!, process.env.NEXT_PUBLIC_TOKEN!))

  useEffect(() => {
    // getLangs()
  }, [])

  return langs
}

type ProgressBarsProps = {
  langs: LangDict
}

const calcProportion = (bytes: number) => 10 * Math.log(bytes)

const ProgressBars = ({ langs }: ProgressBarsProps) => {
  if (Object.keys(langs).length == 0) {
    return (
      <Spinner animation="border" variant="dark" />
    )
  }
  else {
    return (
      <>
        {Object.keys(langs).map((v, i) => (
          <div key={i}>
            {v}: <ProgressBar label={langs[v]} now={calcProportion(langs[v])} />
          </div>
        ))}
      </>
    )
  }
}

export default function Skill({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  const langs = useLangs()

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>language</h2>
        <ProgressBars langs={langs} />
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>framework</h2>
      </TextBox>
    </Layout>
  )
}
