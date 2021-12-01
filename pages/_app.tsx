import "../styles/globals.css"
import contents from "../public/contents.json"
import type { AppProps } from "next/app"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import { useKey } from "rooks"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import type { Dispatch, SetStateAction } from "react"

export const LEN = Object.keys(contents).length

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [[pageIndex, transDirect], setPage] = useState([0, 0])
  const router = useRouter()

  const onPressKey = useCallback((keyDirect: number) => {
    const nextPageIndex = (((pageIndex + keyDirect) % LEN) + LEN) % LEN

    setPage([nextPageIndex, keyDirect])
    router.replace(contents[nextPageIndex])
  }, [pageIndex, router])

  useKey(37, () => onPressKey(-1))    // left key
  useKey(39, () => onPressKey(1))     // right key

  return (
    <div className="wrapper">
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESC} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence initial={false}>
        <Component {...pageProps} pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} />
      </AnimatePresence>
    </div>
  )
}

export interface ComponentProps {
  pageIndex: number
  transDirect: number
  setPage: Dispatch<SetStateAction<[number, number]>>
}
