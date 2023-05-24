import React from "react"
import './bstyle.css'
import LeftNavBar from "./leftNavBar"
import RightNavBar from "./RightNavBar"
import data from "../data";

export default function Body() {

    const dataVar = data.map((item) => (
        <LeftNavBar 
            key={item.id}
            {...item}
        />
    ))

    return (
        <div className="allbody">
            {dataVar}
            <RightNavBar />
        </div>
    )
}