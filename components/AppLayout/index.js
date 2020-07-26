export default function AppLayout ({children}) {
  return (
    <>
      <main>
        {children}
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}