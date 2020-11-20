import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        {/* <title>Деньги в кредит онлайн микрозаймы на карту по Казахстану</title> */}
            <meta name="description"
              content="Деньги в кредит, сервис получения микрозаймов онлайн, удобный калькулятор расчета кредита на карту, первые 7 дней без процентов, каждому 100 клиенту займ в подарок" />
            <meta name="yandex-verification" content="a9d4b76bb5e15aa6" />
            <meta name="yandex-verification" content="a9d4b76bb5e15aa6" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="shortcut icon" href="/logo192.png"/>

        <body>

          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176299351-1"></script>
          <script src="/js/myscript.js"></script>
          <script type="text/javascript" src="/js/myscript2.js"></script>
          <noscript>
            <div>
              <img src="https://mc.yandex.ru/watch/66946039" style={{position: 'absolute', left: '-9999px'}} alt=""  />
            </div>
          </noscript>
          <script src="/js/myscript3.js"></script>
          <script src="/js/myscript4.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
