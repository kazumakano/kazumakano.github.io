import styles from "../styles/FrameworkTiles.module.css"
import type { ReactNode } from "react"
import { useCallback, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"


type FrameworkGridProps = {
  children: ReactNode
}

export function FrameworkGrid({ children }: FrameworkGridProps): JSX.Element {
  return (
    <div className={styles.frameworkGrid}>
      {children}
    </div>
  )
}

type FrameworkTileProps = {
  color: string
  icon: JSX.Element
  name: string
  url: string
}

export function FrameworkTile({ color, icon, name, url }: FrameworkTileProps): JSX.Element {
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
    >
      <Link href={url} target="_blank">
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
      </Link>
    </div>
  )
}
