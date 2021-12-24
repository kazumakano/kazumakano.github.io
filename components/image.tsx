type ImgProps = {
  src: string
}

export default function Img({ src }: ImgProps): JSX.Element {
  return (
    <div className="img">
      <img src={src} />
    </div>
  )
}
