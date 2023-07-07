import "../styles/globals.css"
import contents from "../public/contents.json"
import { useCallback, useEffect, useState } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useKey } from "rooks"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import { IsLandscapeCtxProvider } from "../components/window-orientation"
import type { Dispatch, SetStateAction } from "react"

const BG_IMGS = [
  "/barcelona.jpeg",
  "/fushimi-inari-taisha.jpeg",
  "/mirai-tower.jpeg"
]

export const CONTENTS_NUM = Object.keys(contents).length

const useRandIdx = (maxIdx: number) => {
  const [idx, setIdx] = useState<number | null>(null)

  useEffect(() => {
    setIdx(Math.floor(maxIdx * Math.random()))
  }, [maxIdx, setIdx])

  return idx
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const bgImgIdx = useRandIdx(BG_IMGS.length)
  const [isInputting, setIsInputting] = useState<boolean>(false)
  const [[pageIndex, transDirect], setPage] = useState<[number, number]>([0, 0])
  const router = useRouter()

  const onPressKey = useCallback((keyDirect: number) => {
    if (!isInputting) {
      const nextPageIndex = (((pageIndex + keyDirect) % CONTENTS_NUM) + CONTENTS_NUM) % CONTENTS_NUM

      setPage([nextPageIndex, keyDirect])
      router.replace(contents[nextPageIndex])
    }
  }, [isInputting, pageIndex, setPage, router])

  useKey([8, 37], () => onPressKey(-1))        // back space or left
  useKey([13, 32, 39], () => onPressKey(1))    // enter, space, or right

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESC} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence initial={false}>
        <div id="background" style={{backgroundImage: bgImgIdx == null ? undefined : `url(${BG_IMGS[bgImgIdx]})`}}>
          <IsLandscapeCtxProvider>
            <Component {...pageProps} setIsInputting={setIsInputting} pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} />
          </IsLandscapeCtxProvider>
        </div>
      </AnimatePresence>
    </>
  )
}

export type ComponentProps = {
  setIsInputting: Dispatch<SetStateAction<boolean>>
  pageIndex: number
  transDirect: number
  setPage: Dispatch<SetStateAction<[number, number]>>
}
