import AppLayout from "components/AppLayout"

function DevterApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default DevterApp
