interface ImgProps {
  src: string
}

export function HalfImg({ src }: ImgProps): JSX.Element {
  return (
    <div className="half-img">
      <img src={src} />
    </div>
  )
}
