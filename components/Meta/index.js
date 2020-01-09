import Head from 'next/head'

const Meta = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
