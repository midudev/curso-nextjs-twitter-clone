import { useEffect, useState } from "react"

export default function LengthCounter({ characters = 0, maxLength = 280 }) {
  const [resCharacters, setResCharacters] = useState(null)

  // Porcentaje de caracteres ocupados
  const progress = (characters * 100) / maxLength

  const compensation = progress >= 90 ? 2 : 10

  let primaryColor = progress >= 90 ? "#FFAD1F" : "#1da1f2"
  const secondaryColor = "#1da1f2"
  const textColor = progress >= 100 ? "#E0245E" : "#929495"
  const opacity = 0.3
  const stroke = 2
  const size = 35

  if (progress >= 100) {
    primaryColor = "#E0245E"
  }

  // const size = radius * 2;
  const subtractionSize = size - stroke * 2 - compensation
  const circumference = subtractionSize * Math.PI
  const percentage = circumference - (progress / 100) * circumference

  const addOpacityToColor = () => {
    const opacityHex = Math.round(opacity * 255).toString(16)
    return `${secondaryColor}${opacityHex}`
  }

  useEffect(() => {
    if (progress >= 90) {
      setResCharacters(maxLength - characters)
    } else {
      setResCharacters(null)
    }
  }, [progress])

  return (
    <>
      <section>
        <svg height={size} width={size}>
          <circle
            stroke={addOpacityToColor()}
            strokeWidth={stroke}
            fill="transparent"
            r={subtractionSize / 2}
            cx="50%"
            cy="50%"
          />
          <circle
            stroke={primaryColor}
            strokeWidth={stroke}
            fill="transparent"
            r={subtractionSize / 2}
            cx="50%"
            cy="50%"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={
              progress < 100
                ? Number(percentage)
                : circumference + circumference
            }
          />
        </svg>
        <div>
          <p>{resCharacters}</p>
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          display: inline-block;
        }
        circle {
          transition: all 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
        div {
          position: absolute;
          height: ${size}px;
          width: ${size}px;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          font-size: calc(${size}px / 3);
          font-weight: lighter;
          color: ${textColor};
        }
      `}</style>
    </>
  )
}
