import getBlockStyle from "./block-style"


type ImgProps = {
  enableMargins: [boolean, boolean]
  proportion: number
  src: string
}

export default function Img({ enableMargins, proportion, src }: ImgProps): JSX.Element {
  return (
    <div className="img" style={getBlockStyle(enableMargins, proportion)}>
      <img src={src} />
    </div>
  )
}
