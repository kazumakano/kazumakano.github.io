import styles from "../styles/Skill.module.css"
import { useCallback, useEffect, useState } from "react"
import type { LangDict } from "../list-all-repos-langs/src/list-all-repos-langs"
import listAllReposLangs from "../list-all-repos-langs/src/list-all-repos-langs"
import Spinner from "react-bootstrap/Spinner"
import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"


type ProgressBarConf = {
  colors: {
    [lang: string]: string
  }
  label: string
}

const PROGRESS_BAR_CONFS: ProgressBarConf[] = [
  {
    colors: {
      C: "#555555"
    },
    label: "C"
  },
  {
    colors: {
      CSS: "#563d7c"
    },
    label: "CSS"
  },
  {
    colors: {
      Go: "#375eab"
    },
    label: "Go"
  },
  {
    colors: {
      HTML: "#e44b23"
    },
    label: "HTML"
  },
  {
    colors: {
      Java: "#b07219"
    },
    label: "Java"
  },
  {
    colors: {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489"
    },
    label: "JS/TS"
  },
  {
    colors: {
      "Jupyter Notebook": "#da5b0b",
      Python: "#3572a5"
    },
    label: "Python"
  }
]

const useLangs = () => {
  let [langs, setLangs] = useState<LangDict | null>(null)
  
  const getLangs = useCallback(async () => {
    langs =  await listAllReposLangs(process.env.NEXT_PUBLIC_USER_NAME!, process.env.NEXT_PUBLIC_TOKEN!)
    setLangs(langs)
    console.log(langs)
  }, [])

  useEffect(() => {
    getLangs()
  }, [])

  return langs
}

type ProgressBarsProps = {
  langs: LangDict | null
}

const calcProportion = (bytes: number) => 10 * Math.log(bytes)

const ProgressBars = ({ langs }: ProgressBarsProps) => {
  if (langs == null) {
    return (
      <Spinner animation="border" variant="dark" className={styles.spinner} />
    )
  }
  else {
    return (
      <>
        {PROGRESS_BAR_CONFS.map((c, i) => (
          <div key={i}>
            {`${c.label}:`}
            <div className="progress">
              {Object.keys(c.colors).map(l => (
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: c.colors[l],
                    width: calcProportion(l in langs ? langs[l] : 0)
                  }}
                >
                  {langs[l]}
                </div>
              ))}
            </div>
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
        <p>bytes in public repositories</p>
        <ProgressBars langs={langs} />
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>framework</h2>
      </TextBox>
    </Layout>
  )
}
