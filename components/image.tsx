import useBlockStyle from "../hooks/block-style"


type ImgProps = {
  alt: string
  enableMargins: [boolean, boolean]
  proportion: number
  src: string
}

export function RoundImg({ alt, enableMargins, proportion, src }: ImgProps): JSX.Element {
  return (
    <div className="img round-img" style={useBlockStyle(enableMargins, proportion)}>
      <img alt={alt} src={src} />
    </div>
  )
}
