import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

export default function SectionHeader(props) {
  return (




      <table
        css={css`
          border: 0px solid;
        `}
    >
      <tbody>
          <tr>
            <td css={css`
                background: #fcf113;
                text-align: center;
              `}
            >{props.headerText}</td>
            <td css={css`
                background: black;
                text-align: center;
                width:30px;
              `}
              ></td>
          </tr>
      </tbody>
    </table>
  )
}