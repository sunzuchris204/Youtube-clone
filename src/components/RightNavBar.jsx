import React from "react";
import RightTopNav from "./rightTopNav"
import rightTop from "./RightTop"


export default function RightNavBar() {


    const rightVar = rightTop.map(item => (
        <RightTopNav
            Key={item.key}
            {...item}
        />
    ))

    return(
        <div className="rightBody">
                {rightVar}
                <div className="cards">
                    <div className="card1">

                    </div>
                </div>
            </div>
    )
}
