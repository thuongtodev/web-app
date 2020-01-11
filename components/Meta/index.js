import Head from 'next/head'

const Meta = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <style jsx global>{`
        body {
          font-family: Montserrat, Helvetica, sans-serif;
          font-weight: 400;
          letter-spacing: normal;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          line-height: 1.25rem;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Meta
