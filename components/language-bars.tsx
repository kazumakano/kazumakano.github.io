import styles from "../styles/LangBars.module.css"
import { useCallback, useEffect, useState } from "react"
import type { LangDict } from "../list-all-repos-langs/src/list-all-repos-langs"
import listAllReposLangs from "../list-all-repos-langs/src/list-all-repos-langs"
import Spinner from "react-bootstrap/Spinner"


type LangBarConf = {
  colors: {
    [lang: string]: string
  }
  label: string
}

const LANG_BAR_CONFS: LangBarConf[] = [
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
    setLangDict(await listAllReposLangs(process.env.NEXT_PUBLIC_USER_NAME!))
  }, [setLangDict])

  useEffect(() => {
    getLangDict()
  })

  return langDict
}

const calcProportion = (bytes: number) => bytes / 10000

export default function LangBars(): JSX.Element {
  // const langDict = useLangDict()
  const langDict: LangDict = {
    CSS: 133028,
    HTML: 69052,
    JavaScript: 86798,
    "Jupyter Notebook": 3803,
    Python: 270743,
    TypeScript: 16135
  }

  if (langDict == null) {
    return (
      <Spinner animation="border" variant="dark" className={styles.spinner} />
    )
  }
  else {
    return (
      <>
        {LANG_BAR_CONFS.map((c, i) => (
          <div className={styles.langBars} key={i}>
            <div className="progress">
              {Object.keys(c.colors).map((l, j) => (
                <div
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
