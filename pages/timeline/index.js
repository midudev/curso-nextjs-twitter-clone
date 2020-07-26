import Link from 'next/link'
import AppLayout from '../../components/AppLayout'

export default function Timeline ({ userName }) {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline of {userName}</h1>
        <Link href='/'>
          <a>
            Go home
          </a>
        </Link>
      </AppLayout>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
      console.log(response)
      return response
    })
}