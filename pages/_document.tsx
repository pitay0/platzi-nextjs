import Document, { Html, Head, Main, NextScript } from 'next/document'

//para personalizarlo no es necesario aprenderlo de memoria 
// el codigo se puede sacar desde la documentacion

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
