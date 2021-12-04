interface ImgProps {
  src: string
}

export function HalfImg({ src }: ImgProps): JSX.Element {
  return (
    <div className="half-img">
      <div>
        <img src={src}/>
      </div>
    </div>
  )
}
