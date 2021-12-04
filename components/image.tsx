interface ImgProps {
  src: string
}

export function HalfImg({ src }: ImgProps): JSX.Element {
  return (
    <div className="half-img-wrapper">
      <div className="half-img-container">
        <img src={src}/>
      </div>
    </div>
  )
}
