import styles from "../styles/LangBars.module.css"
import { useEffect, useState } from "react"
import type { LangDict } from "../list-all-repos-langs/src/list-all-repos-langs"
import listAllReposLangs from "../list-all-repos-langs/src/list-all-repos-langs"
import Spinner from "react-bootstrap/Spinner"


export type LangColors = {
  [lang: string]: {
    color: string
    url: string
  }
}

type LangBarsProps = {
  colors: LangColors
  confs: {
    langs: string[]
    label: string
  }[]
}

const useLangDict = () => {
  const [langDict, setLangDict] = useState<LangDict | null>(null)

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

export default function LangBars({ colors, confs }: LangBarsProps): JSX.Element {
  const langDict = useLangDict()

  if (langDict == null) {
    return (
      <Spinner animation="border" variant="dark" className={styles.spinner} />
    )
  }
  else {
    return (
      <>
        {confs.map((c, i) => (
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
