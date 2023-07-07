import { useCallback, useEffect, useState } from "react"


type BlockStyle = {
  height: string
  marginBottom: string
  marginLeft: string
  marginRight: string
  marginTop: string
  width: string
}

export default function useBlockStyle(enableMargins: [boolean, boolean], proportion: number): BlockStyle {
  const [isLandscape, setIsLandscape] = useState<boolean>(true)
  const [winSize, setWinSize] = useState<[number, number] | null>(null)

  const onResizeWin = useCallback(() => setWinSize([window.innerWidth, window.innerHeight]), [setWinSize])

  useEffect(() => {
    setIsLandscape(window.matchMedia("(orientation: landscape)").matches)
    window.addEventListener("resize", onResizeWin)
    return () => window.removeEventListener("resize", onResizeWin)
  }, [setIsLandscape, winSize])

  return {
    height: isLandscape ? "100%" : `calc(${proportion}% - 2px)`,
    marginBottom: enableMargins[1] ? (isLandscape ? "0" : "4px") : "0",
    marginLeft: enableMargins[0] ? (isLandscape ? "4px" : "0") : "0",
    marginRight: enableMargins[1] ? (isLandscape ? "4px" : "0") : "0",
    marginTop: enableMargins[0] ? (isLandscape ? "0" : "4px") : "0",
    width: isLandscape ? `calc(${proportion}% - 2px)` : "100%" 
  }
}
