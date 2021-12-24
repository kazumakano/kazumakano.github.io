import getBlockStyle from "./block-style"


type ImgProps = {
  enableMargins: [boolean, boolean]
  proportion: number
  src: string
}

export function RoundImg({ enableMargins, proportion, src }: ImgProps): JSX.Element {
  return (
    <div className="img round-img" style={getBlockStyle(enableMargins, proportion)}>
      <img src={src} />
    </div>
  )
}
