import * as React from "react"

export const Printer:React.FunctionComponent<{name: string}> = (props) =>{
    return <span>{props.name}</span>
}

