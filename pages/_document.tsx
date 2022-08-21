import { Html, Head, Main, NextScript } from "next/document"

const BG_IMGS = [
  "/fushimi-inari-taisha.jpeg",
  "/mirai-tower.jpeg"
]

const getRandInt = (maxNum: number) => {
  return Math.round(Date.now()) % maxNum    // timestamp at build
}

export default function Document(): JSX.Element {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <body style={{backgroundImage: `url(${BG_IMGS[getRandInt(BG_IMGS.length)]})`}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
