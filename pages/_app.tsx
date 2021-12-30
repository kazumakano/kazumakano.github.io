import "../styles/globals.css"
import contents from "../public/contents.json"
import type { AppProps } from "next/app"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import { useKey } from "rooks"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import type { Dispatch, SetStateAction } from "react"

export const CONTENTS_NUM = Object.keys(contents).length

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [[pageIndex, transDirect], setPage] = useState([0, 0])
  const router = useRouter()

  const onPressKey = useCallback((keyDirect: number) => {
    const nextPageIndex = (((pageIndex + keyDirect) % CONTENTS_NUM) + CONTENTS_NUM) % CONTENTS_NUM

    setPage([nextPageIndex, keyDirect])
    router.replace(contents[nextPageIndex])
  }, [pageIndex, setPage, router])

  useKey(8, () => onPressKey(-1))     // back space key
  useKey(13, () => onPressKey(1))     // enter key
  useKey(32, () => onPressKey(1))     // space key
  useKey(37, () => onPressKey(-1))    // left key
  useKey(39, () => onPressKey(1))     // right key

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESC} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <AnimatePresence initial={false}>
        <Component {...pageProps} pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} />
      </AnimatePresence>
    </>
  )
}

export type ComponentProps = {
  pageIndex: number
  transDirect: number
  setPage: Dispatch<SetStateAction<[number, number]>>
}
