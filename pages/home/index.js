import AppLayout from "components/AppLayout"
import { useEffect, useState } from "react"
import Devit from "components/Devit"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          background-color: #fff;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        section {
          overflow: auto;
          height: calc(
            100% - 98px
          ); //100% - el valor de altura del head y el nav
        }

        nav {
          bottom: 0;
          background-color: #000;
          border-top: 1px solid #ccc;
          height: 49px;
          position: absolute;
          width: 100%;
        }
      `}</style>
    </>
  )
}
