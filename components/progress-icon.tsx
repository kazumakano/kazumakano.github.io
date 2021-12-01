import { LEN } from "../pages/_app"
import { motion } from "framer-motion"


interface ProgressIconProps {
  pageIndex: number
  transDirect: number
}

export default function ProgressIcon({ pageIndex, transDirect }: ProgressIconProps): JSX.Element  {
  const draw = {
    before: {
      pathLength: ((((pageIndex - transDirect) % LEN) + LEN) % LEN) / (LEN - 1),
      opacity: 0
    },
    after: {
      pathLength: pageIndex / (LEN - 1),
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
      className="progress-icon"
    >
      <motion.circle
        initial="before"
        animate="after"
        cx="50"
        cy="50"
        r="45"
        stroke="white"
        variants={draw}
        fill="none"
        strokeWidth="10"
        style={{
          rotate: 270
        }}
      />
    </motion.svg>
  )
}