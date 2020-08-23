import * as React from "react"

export default function Create(props) {
  return (
    <svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 4.5H5.5a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V11" />
        <path d="M17.5 3.467a1.462 1.462 0 01-.017 2.05L10.5 12.5l-3 1 1-3 6.987-7.046a1.409 1.409 0 012.013.013zM15.5 5.5l.953 1" />
      </g>
    </svg>
  )
}
