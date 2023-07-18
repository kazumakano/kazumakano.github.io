import type { ReactNode } from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"


type ClientCtxProviderProps = {
  children: ReactNode
}

export const IsLandscapeCtx = createContext<boolean>(true)
export const IsPcCtx = createContext<boolean>(true)

export function ClientCtxProvider({ children }: ClientCtxProviderProps): JSX.Element {
  const [isLandscape, setIsLandscape] = useState<boolean>(true)
  const [isPc, setIsPc] = useState<boolean>(true)
  const [winSize, setWinSize] = useState<[number, number]>([-1, -1])

  const onResizeWin = useCallback(() => setWinSize([window.innerWidth, window.innerHeight]), [setWinSize])

  useEffect(() => {
    setIsLandscape(window.matchMedia("(orientation: landscape)").matches)
    window.addEventListener("resize", onResizeWin)
    return () => window.removeEventListener("resize", onResizeWin)
  }, [setIsLandscape, onResizeWin, winSize])

  useEffect(() => {
    setIsPc(!/Android|iPad|iPhone|iPod/.test(window.navigator.userAgent))
  }, [setIsPc])

  return (
    <IsPcCtx.Provider value={isPc}>
      <IsLandscapeCtx.Provider value={isLandscape}>
        {children}
      </IsLandscapeCtx.Provider>
    </IsPcCtx.Provider>
  )
}

type BlockStyle = {
  height: string
  marginBottom: string
  marginLeft: string
  marginRight: string
  marginTop: string
  width: string
}

export function useBlockStyle(enableMargins: [boolean, boolean], proportion: number): BlockStyle {
  const isLandscape = useContext(IsLandscapeCtx)

  return {
    height: isLandscape ? "100%" : `calc(${proportion}% - 2px)`,
    marginBottom: enableMargins[1] ? (isLandscape ? "0" : "4px") : "0",
    marginLeft: enableMargins[0] ? (isLandscape ? "4px" : "0") : "0",
    marginRight: enableMargins[1] ? (isLandscape ? "4px" : "0") : "0",
    marginTop: enableMargins[0] ? (isLandscape ? "0" : "4px") : "0",
    width: isLandscape ? `calc(${proportion}% - 2px)` : "100%" 
  }
}
