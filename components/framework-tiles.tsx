import styles from "../styles/FrameworkTiles.module.css"
import type { ReactNode } from "react"
import { useCallback, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"


type FrameworkGridProps = {
  children: ReactNode
  gridShape: [number, number]
}

export function FrameworkGrid({ children, gridShape }: FrameworkGridProps): JSX.Element {
  return (
    <div
      className={styles.frameworkGrid}
      style={{
        gridTemplateColumns: "1fr ".repeat(gridShape[0]),
        gridTemplateRows: "1fr ".repeat(gridShape[1])
      }}
    >
      {children}
    </div>
  )
}

type FrameworkTileProps = {
  color: string
  icon: JSX.Element
  index: [number, number]
  name: string
  url: string
}

export function FrameworkTile({ color, icon, index, name, url }: FrameworkTileProps): JSX.Element {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

  const nameTile = (
    <div className={styles.nameTile} style={{backgroundColor: color}}>
      {name}
    </div>
  )

  return (
    <div
      onMouseEnter={useCallback(() => setIsMouseOver(true), [setIsMouseOver])}
      onMouseLeave={useCallback(() => setIsMouseOver(false), [setIsMouseOver])}
      style={{
        gridColumn: index[0] + 1,
        gridRow: index[1] + 1
      }}
    >
      <Link href={url}>
        <a target="_blank">
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={isMouseOver ? 1 : 0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMouseOver ? nameTile : icon}
            </motion.div>
          </AnimatePresence>
        </a>
      </Link>
    </div>
  )
}
