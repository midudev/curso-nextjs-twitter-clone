import * as React from "react"

export default function Reuse(props) {
  return (
    <svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 7.5v-5H3" />
        <path d="M8.5 2.5c-3.333 2.837-5 5.67-5 8.5s1 5.33 3 7.5" />
        <g>
          <path d="M12.5 13.5v5H18" />
          <path d="M12.5 18.5c3.333-2.837 5-5.67 5-8.5s-1-5.33-3-7.5" />
        </g>
      </g>
    </svg>
  )
}
