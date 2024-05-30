import styles from "../styles/SocialTiles.module.css"
import type { ReactNode } from "react"
import Link from "next/link"
import { useCallback, useState } from "react"


type SocialGridProps = {
  children: ReactNode
}

export function SocialGrid({ children }: SocialGridProps): JSX.Element {
  return (
    <div>
      {children}
    </div>
  )
}

type LabelProps = {
  children: ReactNode
  isLeft: boolean
  url: string
}

const Label = ({ children, isLeft, url }: LabelProps) => (
  <div className={isLeft ? styles.leftLabel : styles.rightLabel}>
    <Link href={url} target="_blank">
      {children}
    </Link>
  </div>
)

type IconProps = {
  color: string
  icon: JSX.Element
  isMouseOver: boolean
  url: string
}

const Icon = ({ color, icon, isMouseOver, url }: IconProps) => (
  <div className={styles.icon}>
    <Link href={url} style={{fill: isMouseOver ? color : "inherit"}} target="_blank">
      {icon}
    </Link>
  </div>
)

type SocialTileProps = {
  children: ReactNode
  color: string
  icon: JSX.Element
  reverse: boolean
  url: string
}

export function SocialTile({ children, color, icon, reverse, url }: SocialTileProps): JSX.Element {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

  return (
    <div
      className={styles.socialTile}
      onMouseEnter={useCallback(() => setIsMouseOver(true), [setIsMouseOver])}
      onMouseLeave={useCallback(() => setIsMouseOver(false), [setIsMouseOver])}
    >
      {reverse ? (
        <>
          <Label isLeft={reverse} url={url}>
            {children}
          </Label>
          <Icon color={color} icon={icon} isMouseOver={isMouseOver} url={url} />
        </>
      ) : (
        <>
          <Icon color={color} icon={icon} isMouseOver={isMouseOver} url={url} />
          <Label isLeft={reverse} url={url}>
            {children}
          </Label>
        </>
      )}
    </div>
  )
}
