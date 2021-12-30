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
      Go: "#375eab"
    },
    label: "Go"
  },
  {
    colors: {
      HTML: "#e44b23",
      CSS: "#563d7c"
    },
    label: "HTML / CSS"
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
    label: "JS / TS"
  },
  {
    colors: {
      Python: "#3572a5",
      "Jupyter Notebook": "#da5b0b"
    },
    label: "Python"
  }
]

const useLangDict = () => {
  let [langDict, setLangDict] = useState<LangDict | null>(null)
  
  const getLangDict = useCallback(async () => {
    setLangDict(await listAllReposLangs(process.env.NEXT_PUBLIC_USER_NAME!, process.env.NEXT_PUBLIC_TOKEN!))
  }, [])

  useEffect(() => {
    getLangDict()
  })

  return langDict
}

const downIcon = (
  <svg height="1em" width="1em">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
  </svg>
)

type ProgressBarsProps = {
  langDict: LangDict | null
}

const calcProportion = (bytes: number) => bytes / 10000

const ProgressBars = ({ langDict }: ProgressBarsProps) => {
  if (langDict == null) {
    return (
      <Spinner animation="border" variant="dark" className={styles.spinner} />
    )
  }
  else {
    return (
      <>
        {PROGRESS_BAR_CONFS.map((c, i) => (
          <div className={styles.progressBars} key={i}>
            <div className="progress">
              {Object.keys(c.colors).map((l, j) => (
                <div
                  className="progress-bar"
                  key={j}
                  style={{
                    backgroundColor: c.colors[l],
                    width: `${l in langDict ? calcProportion(langDict[l]) : 0}%`
                  }}
                />
              ))}
              <span className={styles.label}>{c.label}</span>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default function Skill({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  const langDict = useLangDict()
  // const langDict = {
  //   CSS: 133028,
  //   HTML: 69052,
  //   JavaScript: 86798,
  //   "Jupyter Notebook": 3803,
  //   Python: 270743,
  //   TypeScript: 16135
  // }

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>language</h2>
        <p>{downIcon} bytes in public repositories</p>
        <ProgressBars langDict={langDict} />
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>framework</h2>
      </TextBox>
    </Layout>
  )
}
