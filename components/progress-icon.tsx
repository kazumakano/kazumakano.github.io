import { CONTENTS } from "../pages/_app"
import { motion } from "framer-motion"


type ProgressIconProps = {
  pageIndex: number
  transDirect: number
}

export default function ProgressIcon({ pageIndex, transDirect }: ProgressIconProps): JSX.Element  {
  const variants = {
    before: {
      pathLength: ((((pageIndex - transDirect) % CONTENTS.length) + CONTENTS.length) % CONTENTS.length) / (CONTENTS.length - 1),
      opacity: 0
    },
    after: {
      pathLength: pageIndex / (CONTENTS.length - 1),
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  }

  return (
    <motion.svg
      viewBox="0 0 100 100"
      initial="before"
      animate="after"
      fill="none"
      id="progress-icon"
    >
      <motion.circle
        variants={variants}
        cx="50"
        cy="50"
        r="45"
        stroke="rgba(255, 255, 255, 0.8)"
        strokeWidth="10"
        style={{rotate: 270}}
      />
    </motion.svg>
  )
}
