import { useState } from "react"


export default function usePinch(srcEle: HTMLElement | null, tgtEle: HTMLElement | null): void {
  const [evCache, setEvCache] = useState<PointerEvent[]>([])
  const [prevDiff, setPrevDiff] = useState<number>(-1)

  const onPointerDown = (ev: PointerEvent) => {
    evCache.push(ev)
    setEvCache(evCache)
  }

  const onPointerMove = (ev: PointerEvent) => {
    const index = evCache.findIndex(
      (cachedEv) => cachedEv.pointerId === ev.pointerId,
    );
    evCache[index] = ev
    setEvCache(evCache)
  
    if (tgtEle != null && evCache.length === 2) {
      const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);
  
      if (prevDiff > 0) {
        if (curDiff > prevDiff) {
          tgtEle.style.zoom = `${curDiff / 100}`
        }
        if (curDiff < prevDiff) {
          tgtEle.style.zoom = `${curDiff / 100}`
        }
      }
  
      setPrevDiff(curDiff);
    }
  }

  const onReset = (ev: PointerEvent) => {
    const index = evCache.findIndex(
      (cachedEv) => cachedEv.pointerId === ev.pointerId,
    );
    evCache.splice(index, 1)
    setEvCache(evCache)
  
    if (evCache.length < 2) {
      setPrevDiff(-1)
    }
  }

  if (srcEle != null) {
    srcEle.onpointerdown = onPointerDown
    srcEle.onpointermove = onPointerMove
    srcEle.onpointerup = onReset
    srcEle.onpointercancel = onReset
    srcEle.onpointerout = onReset
    srcEle.onpointerleave = onReset
  }
}
