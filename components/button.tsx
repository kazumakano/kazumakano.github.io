import { useCallback, useState } from "react"
import type { MouseEvent } from "react"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Link from "next/link"

const ICON_LAG = 1000    // time lag to change icon

type AttachBtnProps = {
  uri: string
}

const attachIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
  </svg>
)

export function AttachBtn({ uri }: AttachBtnProps): JSX.Element {
  return (
    <Link href={uri} passHref target="_blank">
      <Button
        size="sm"
        variant="outline-dark"
        className="btn pdf-btn shadow-none"
      >
        {attachIcon}
      </Button>
    </Link>
  )
}

type CopyBtnProps = {
  text: string
}

const clipboardIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
  </svg>
)

const checkIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
)

export function CopyBtn({ text }: CopyBtnProps): JSX.Element {
  const [icon, setIcon] = useState<JSX.Element>(clipboardIcon)

  const onClick = useCallback(async () => {
    await window.navigator.clipboard.writeText(text)
    setIcon(checkIcon)
  }, [setIcon, text])

  const onMouseLeave = useCallback((event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.currentTarget.blur()
    window.setTimeout(setIcon, ICON_LAG, clipboardIcon)
  }, [setIcon])

  return (
    <Button
      size="sm"
      variant="outline-dark"
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      className="btn copy-btn shadow-none"
    >
      {icon}
    </Button>
  )
}

type MailerBtnProps = {
  uri: string
}

const openIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
  </svg>
)

const sendIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z" />
  </svg>
)

export function MailerBtn({ uri }: MailerBtnProps): JSX.Element {
  return (
    <OverlayTrigger overlay={<Tooltip style={{position: "fixed"}}>Open in mail app</Tooltip>}>
      <Link href={uri} passHref>
        <Button
          size="sm"
          variant="dark"
          className="btn mailer-btn shadow-none"
        >
          {openIcon}
        </Button>
      </Link>
    </OverlayTrigger>
  )
}

type PdfBtnProps = {
  uri: string
}

const pdfIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
    <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.244.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 5.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
  </svg>
)

export function PdfBtn({ uri }: PdfBtnProps): JSX.Element {
  return (
    <Link href={uri} passHref target="_blank">
      <Button
        size="sm"
        variant="outline-dark"
        className="btn pdf-btn shadow-none"
      >
        {pdfIcon}
      </Button>
    </Link>
  )
}

type SwapBtnProps = {
  onClick?: () => void
}

const swapIcon = (
  <svg height="16" viewBox="0 0 16 16" width="16">
    <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
  </svg>
)

export function SwapBtn({ onClick }: SwapBtnProps): JSX.Element {
  return (
    <Button
    size="sm"
    variant="outline-dark"
    onClick={onClick}
    className="btn swap-btn shadow-none"
    >
      {swapIcon}
    </Button>
  )
}
