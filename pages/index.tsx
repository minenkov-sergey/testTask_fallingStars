import Main from './Main';

const Home = () => {
  return (
    <>
      <Main/>

      <style jsx global>{`
        html{
          overflow-y: scroll;
        }
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      
    </>
  )
}

export default Home
