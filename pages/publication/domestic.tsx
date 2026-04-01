import papers from "../../public/papers.json"
import type { ComponentProps } from "../_app"
import { useContext, useRef } from "react"
import { IsPcCtx } from "../../components/client"
import usePinch from "../../hooks/pinch"
import Layout from "../../components/layout"
import TextBox from "../../components/text-box"
import { type Paper, PubTab } from "../../components/table"


export default function Publication({ pageIndex, transDirect, setTransDirect }: ComponentProps): JSX.Element {
  const isPc = useContext(IsPcCtx)
  const pinchSrcRef = useRef<HTMLDivElement>(null)
  const pinchTgtRef = useRef<HTMLDivElement>(null)

  usePinch(pinchSrcRef, pinchTgtRef)

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title={isPc ? "publications & presentations" : "pubs & pres"}>
      <TextBox enableMargins={[false, false]} proportion={100} innerRef={pinchTgtRef} outerRef={pinchSrcRef}>
        <h2>domestic</h2>
        <PubTab papers={papers.domestic as Paper[]} />
      </TextBox>
    </Layout>
  )
}
