import contents from "../public/contents.json"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { CONTENTS_NUM } from "../pages/_app"
import { motion } from "framer-motion"

const SWIPE_POWER_THRESH = 10000

type SlideProps = {
  children: ReactNode
  pageIndex: number
  transDirect: number
  setPage: Dispatch<SetStateAction<[number, number]>>
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

export default function Slide({ pageIndex, transDirect, setPage, children }: SlideProps): JSX.Element {
  const router = useRouter()

  const onSwipe = useCallback((swipeDirect: number) => {
    const nextPageIndex = (((pageIndex + swipeDirect) % CONTENTS_NUM) + CONTENTS_NUM) % CONTENTS_NUM

    setPage([nextPageIndex, swipeDirect])
    router.replace(contents[nextPageIndex])
  }, [pageIndex, setPage, router])

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
        drag="x"
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
