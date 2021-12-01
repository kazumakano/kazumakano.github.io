import type { ComponentProps } from "../pages/_app"
import type { ReactNode } from "react"
import { LEN } from "../pages/_app"
import { motion } from "framer-motion"
import Slide from "./slide"
import Header from "./header"
import Body from "./body"


interface LayoutProps extends ComponentProps {
  children: ReactNode
  title: string
}

export default function Layout({ pageIndex, transDirect, setPage, children, title }: LayoutProps): JSX.Element {
  const draw = {
    before: {
      pathLength: ((((pageIndex - transDirect) % LEN) + LEN) % LEN) / (LEN - 1),
      opacity: 0
    },
    after: {
      pathLength: (pageIndex) / (LEN - 1),
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  }

  return (
    <div className="container">
      <motion.svg
        className="progress-icon"
        viewBox="0 0 60 60"
      >
        <motion.circle
          initial="before"
          animate="after"
          cx="30"
          cy="30"
          r="27.5"
          stroke="white"
          variants={draw}
          fill="none"
          strokeWidth="5"
          style={{
            rotate: 270
          }}
        />
        <h1>{pageIndex}</h1>
      </motion.svg>

      <Slide pageIndex={pageIndex} transDirect={transDirect} setPage={setPage}>
        <Header title={title} />

        <Body>
          {children}
        </Body>
      </Slide>
    </div>
  )
}
