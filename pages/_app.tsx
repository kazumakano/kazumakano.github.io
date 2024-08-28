import "../styles/globals.css"
import { useCallback, useEffect, useState } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useKey } from "rooks"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import { ClientCtxProvider } from "../components/client"
import type { Dispatch, SetStateAction } from "react"

const BG_IMGS = [
  "/barcelona.jpeg",
  "/fushimi-inari-taisha.jpeg",
  "/golconda.jpeg",
  "/hakodate.jpeg"
]

export const CONTENTS = [
  "/",
  "/publication",
  "/achievement",
  "/skill",
  "/contact"
]

const useRandIdx = (maxIdx: number) => {
  const [idx, setIdx] = useState<number>(-1)

  useEffect(() => {
    setIdx(Math.floor(maxIdx * Math.random()))
  }, [maxIdx, setIdx])

  return idx
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const bgImgIdx = useRandIdx(BG_IMGS.length)
  const [isInputting, setIsInputting] = useState<boolean>(false)
  const router = useRouter()
  const pageIndex = CONTENTS.indexOf(router.pathname)
  const [transDirect, setTransDirect] = useState<number>(0)

  const onPressKey = useCallback((keyDirect: number) => {
    if (!isInputting) {
      setTransDirect(keyDirect)
      const nextPageIndex = (((pageIndex + keyDirect) % CONTENTS.length) + CONTENTS.length) % CONTENTS.length
      router.replace(CONTENTS[nextPageIndex])
    }
  }, [isInputting, pageIndex, router, setTransDirect])

  useKey([8, 37], () => onPressKey(-1))        // back space or left
  useKey([13, 32, 39], () => onPressKey(1))    // enter, space, or right

  return (
    <>
      <Head>
        <title>Kazuma KANO | 加納 一馬</title>
        <meta name="description" content="This is my profile site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence initial={false}>
        <div id="background" style={{backgroundImage: bgImgIdx >= 0 ? `url(${BG_IMGS[bgImgIdx]})` : undefined}}>
          <ClientCtxProvider>
            <Component {...pageProps} setIsInputting={setIsInputting} pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} />
          </ClientCtxProvider>
        </div>
      </AnimatePresence>
    </>
  )
}

export type ComponentProps = {
  setIsInputting: Dispatch<SetStateAction<boolean>>
  pageIndex: number
  transDirect: number
  setTransDirect: Dispatch<SetStateAction<number>>
}
