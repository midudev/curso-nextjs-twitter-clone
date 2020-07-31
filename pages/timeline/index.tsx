import { NextPage } from 'next'
import Link from 'next/link'
import AppLayout from '../../components/AppLayout'

interface Props {
  userName: string
}

const Timeline: NextPage<Props> = ({ userName }) => {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline of {userName}</h1>
        <Link href="/">
          <a>Go home</a>
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

Timeline.getInitialProps = async () => {
  return fetch('http://localhost:3000/api/hello')
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
      return response
    })
}

export default Timeline
