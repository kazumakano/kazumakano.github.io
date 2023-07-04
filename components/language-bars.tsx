import styles from "../styles/LangBars.module.css"
import { useEffect, useState } from "react"
import type { LangDict } from "../list-all-repos-langs/src/list-all-repos-langs"
import listAllReposLangs from "../list-all-repos-langs/src/list-all-repos-langs"
import Spinner from "react-bootstrap/Spinner"


type LangBarConf = {
  langs: string[]
  label: string
}

const LANG_BAR_CONFS: LangBarConf[] = [
  {
    langs: ["C", "C++"],
    label: "C / C++"
  },
  {
    langs: ["C#"],
    label: "C#"
  },
  {
    langs: ["Go"],
    label: "Go"
  },
  {
    langs: ["HTML", "CSS"],
    label: "HTML / CSS"
  },
  {
    langs: ["Java"],
    label: "Java"
  },
  {
    langs: ["JavaScript", "TypeScript"],
    label: "JS / TS"
  },
  {
    langs: ["Python", "Jupyter Notebook"],
    label: "Python"
  },
  {
    langs: ["R"],
    label: "R"
  }
]

export type LangColors = {
  [lang: string]: {
    color: string
    url: string
  }
}

type LangBarsProps = {
  colors: LangColors
}

const useLangDict = () => {
  let [langDict, setLangDict] = useState<LangDict | null>(null)

  useEffect(() => {
    const ctrler = new window.AbortController()

    listAllReposLangs(process.env.NEXT_PUBLIC_GITHUB_USER_NAME!, undefined, ctrler.signal).then(value => {
      setLangDict(value)
    }).catch(() => {})

    return () => ctrler.abort()
  }, [setLangDict])

  return langDict
}

const calcProportion = (bytes: number) => bytes / 10000

export default function LangBars({ colors }: LangBarsProps): JSX.Element {
  const langDict = useLangDict()

  if (langDict == null) {
    return (
      <Spinner animation="border" variant="dark" className={styles.spinner} />
    )
  }
  else {
    return (
      <>
        {LANG_BAR_CONFS.map((c, i) => (
          <div className={styles.langBar} key={i}>
            <div className="progress">
              {c.langs.map((l, j) => (
                <div
                  key={j}
                  style={{
                    backgroundColor: colors[l].color,
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
