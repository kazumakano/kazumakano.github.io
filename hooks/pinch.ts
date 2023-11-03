import { useEffect, useState } from "react"


export default function usePinch(srcEle: HTMLElement | null, tgtEle: HTMLElement | null): void {
  const [evList, setEvList] = useState<PointerEvent[]>([])
  const [[initDist, initZoom], setInitStates] = useState<[number, number]>([-1, -1])

  const onPointerDown = (ev: PointerEvent) => {
    evList.push(ev)
    setEvList(evList)
  }

  const onPointerMove = (ev: PointerEvent) => {
    evList[evList.findIndex(e => e.pointerId == ev.pointerId)] = ev
    setEvList(evList)

    if (evList.length == 2) {
      const dist = Math.abs(evList[0].clientX - evList[1].clientX)

      if (initDist < 0) {
        setInitStates([dist, parseFloat(tgtEle!.style.zoom)])
      } else {
        tgtEle!.style.zoom = (dist / initDist * initZoom).toString()
      }
    }
  }

  const onReset = (ev: PointerEvent) => {
    evList.splice(evList.findIndex(e => e.pointerId === ev.pointerId))
    setEvList(evList)

    if (evList.length < 2) {
      setInitStates([-1, -1])
    }
  }

  if (srcEle != null && tgtEle != null) {
    srcEle.onpointerdown = onPointerDown
    srcEle.onpointermove = onPointerMove
    srcEle.onpointerup = onReset
    srcEle.onpointercancel = onReset
    srcEle.onpointerout = onReset
    srcEle.onpointerleave = onReset
  }

  useEffect(() => {
    if (tgtEle != null) {
      tgtEle.style.zoom = "1"
    }
  }, [tgtEle])
}
