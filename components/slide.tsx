import type { Dispatch, ReactNode, SetStateAction } from "react"
import { IsPcCtx } from "./client"
import { useCallback, useContext } from "react"
import { useRouter } from "next/router"
import { CONTENTS } from "../pages/_app"
import { motion } from "framer-motion"

const SWIPE_POWER_THRESH = 10000

type SlideProps = {
  children: ReactNode
  pageIndex: number
  transDirect: number
  setTransDirect: Dispatch<SetStateAction<number>>
}

const variants = {
  enter: (transDirect: number) => {
    return {
      x: transDirect > 0 ? 2000 : -2000,
      opacity: 0
    }
  },
  center: {
    x: 0,
    opacity: 1
  },
  exit: (transDirect: number) => {
    return {
      x: transDirect > 0 ? -2000 : 2000,
      opacity: 0
    }
  }
}

const calcSwipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function Slide({ children, pageIndex, transDirect, setTransDirect }: SlideProps): JSX.Element {
  const isPc = useContext(IsPcCtx)
  const router = useRouter()

  const onSwipe = useCallback((swipeDirect: number) => {
    setTransDirect(swipeDirect)
    const nextPageIndex = (((pageIndex + swipeDirect) % CONTENTS.length) + CONTENTS.length) % CONTENTS.length
    router.replace(CONTENTS[nextPageIndex])
  }, [pageIndex, router, setTransDirect])

  return (
    <div id="slide">
      <motion.div
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {type: "spring", stiffness: 300, damping: 30},
          opacity: {duration: 0.2}
        }}
        variants={variants}
        custom={transDirect}
        drag={isPc ? "x" : false}
        dragConstraints={{
          left: 0,
          right: 0
        }}
        dragElastic={1}
        onDragEnd={(_, { offset, velocity }) => {
          const swipePower = calcSwipePower(offset.x, velocity.x)

          if (swipePower < -SWIPE_POWER_THRESH) {
            onSwipe(1)
          }
          else if (swipePower > SWIPE_POWER_THRESH) {
            onSwipe(-1)
          }
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
