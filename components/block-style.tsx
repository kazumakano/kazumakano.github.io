import { useEffect, useState } from "react"


type DivStyle = {
  height: string
  marginBottom: string
  marginLeft: string
  marginRight: string
  marginTop: string
  width: string
}

function useIsLandscape(): boolean {
  const [isLandscape, setIsLandscape] = useState<boolean>(true)

  useEffect(() => {
    setIsLandscape(window.matchMedia("(orientation: landscape)").matches)
  }, [])

  return isLandscape
}

export default function getBlockStyle(enableMargins: [boolean, boolean], proportion: number): DivStyle {
  const isLandscape = useIsLandscape()

  return {
    height: isLandscape ? "100%" : `calc(${proportion}% - 2px)`,
    marginBottom: enableMargins[1] ? (isLandscape ? "0" : "4px") : "0",
    marginLeft: enableMargins[0] ? (isLandscape ? "4px" : "0") : "0",
    marginRight: enableMargins[1] ? (isLandscape ? "4px" : "0") : "0",
    marginTop: enableMargins[0] ? (isLandscape ? "0" : "4px") : "0",
    width: isLandscape ? `calc(${proportion}% - 2px)` : "100%" 
  }
}
