type HeaderProps = {
  title: string
  noCaps?: boolean
}

export default function Header({ title, noCaps }: HeaderProps): JSX.Element {
  return (
    <div id="header">
      <h1 className={noCaps ? "no-caps" : undefined}>{title}</h1>
    </div>
  )
}
