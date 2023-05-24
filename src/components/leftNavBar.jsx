import React from "react";

export default function LeftNavBar(props) {

    return(
        <div className="LeftNavBar">
                <div className="home">
                    <h3>{props.Title}</h3>
                </div>
                <div className="home">
                    <h3>{props.desc}</h3>
                </div>
                <div className="home">
                    <h3>{props.sub}</h3>
                </div>
                <hr />
                <div className="home">
                    <h3>{props.Library}</h3>
                </div>
                <div className="home">
                    <h3>{props.history}</h3>
                </div>
                <div className="home">
                    <h3>{props.vids}</h3>
                </div>
                <div className="home">
                    <h3>{props.watch}</h3>
                </div>
                <div className="home">
                    <h3>{props.liked}</h3>
                </div>
                <hr />
                <div className="home">
                    <h3>{props.subLive}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                <div className="home">
                    <h3>{props.account}</h3>
                </div>
                </div>
    )
}

