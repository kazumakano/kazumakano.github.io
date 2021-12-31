import { useCallback, useState } from "react"
import type { MouseEvent } from "react"
import Button from "react-bootstrap/Button"

const ICON_LAG = 1000    // time lag to change icon

type CopyBtnProps = {
  text: string
}

const clipboardIcon = (
  <svg height="1em" width="1em">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
  </svg>
)

const checkIcon = (
  <svg height="1em" width="1em">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
)

export function CopyBtn({ text }: CopyBtnProps): JSX.Element {
  const [icon, setIcon] = useState(clipboardIcon)

  const onClick = useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setIcon(checkIcon)
  }, [setIcon, text])

  const onMouseLeave = useCallback((event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.currentTarget.blur()
    window.setTimeout(setIcon, ICON_LAG, clipboardIcon)
  }, [setIcon])

  return (
    <Button size="sm" variant="outline-dark" onClick={onClick} onMouseLeave={onMouseLeave} className="btn copy-btn">{icon}</Button>
  )
}
