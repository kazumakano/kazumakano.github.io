import papers from "../../public/papers.json"
import type { ComponentProps } from "../_app"
import { useRef } from "react"
import usePinch from "../../hooks/pinch"
import Layout from "../../components/layout"
import TextBox from "../../components/text-box"
import { type Paper, PubTab } from "../../components/table"


export default function Publication({ pageIndex, transDirect, setTransDirect }: ComponentProps): JSX.Element {
  const pinchSrcRef = useRef<HTMLDivElement>(null)
  const pinchTgtRef = useRef<HTMLDivElement>(null)

  usePinch(pinchSrcRef, pinchTgtRef)

  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setTransDirect={setTransDirect} title="publications & presentations">
      <TextBox enableMargins={[false, false]} proportion={100} innerRef={pinchTgtRef} outerRef={pinchSrcRef}>
        <h2>international</h2>
        <PubTab papers={papers.international as Paper[]} />
      </TextBox>
    </Layout>
  )
}
