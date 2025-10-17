import type { RefObject } from "react"
import { useEffect, useState } from "react"


export default function usePinch(srcRef: RefObject<HTMLElement>, tgtRef: RefObject<HTMLElement>): void {
  const [evList, setEvList] = useState<PointerEvent[]>([])
  const [[initDist, initZoom], setInitStates] = useState<[number, number]>([-1, -1])

  const onPointerDown = (ev: PointerEvent) => {
    evList.push(ev)
    setEvList(evList)
  }

  const onPointerMove = (ev: PointerEvent) => {
    evList[evList.findIndex(e => e.pointerId == ev.pointerId)] = ev
    setEvList(evList)

    if (tgtRef.current != null && evList.length == 2) {
      const dist = Math.hypot(evList[0].clientX - evList[1].clientX, evList[0].clientY - evList[1].clientY)

      if (initDist < 0) {
        setInitStates([dist, parseFloat(tgtRef.current.style.zoom)])
      } else {
        tgtRef.current.style.zoom = (dist / initDist * initZoom).toString()
      }
    }
  }

  const onReset = (ev: PointerEvent) => {
    evList.splice(evList.findIndex(e => e.pointerId === ev.pointerId), 1)
    setEvList(evList)

    if (evList.length < 2) {
      setInitStates([-1, -1])
    }
  }

  useEffect(() => {
    if (srcRef.current != null) {
      srcRef.current.onpointerdown = onPointerDown
      srcRef.current.onpointermove = onPointerMove
      srcRef.current.onpointerup = onReset
      srcRef.current.onpointercancel = onReset
      srcRef.current.onpointerout = onReset
      srcRef.current.onpointerleave = onReset
    }
  }, [onPointerDown, onPointerMove, onReset, srcRef.current])

  useEffect(() => {
    if (srcRef.current != null) {
      srcRef.current.style.touchAction = "none"
    }
  }, [srcRef.current])

  useEffect(() => {
    if (tgtRef.current != null) {
      tgtRef.current.style.zoom = "1"
    }
  }, [tgtRef.current])
}
