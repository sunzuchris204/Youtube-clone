import React from "react";
import { ReactDOM } from "react";
import './style.css'

export default function Header() {

    return (
        <div className="container">
            <div className="menu">
                <h3>💬</h3>
            </div>
            <div className="Header-Logo">
                 <h3>▶YouTube</h3>
            </div>
            <div className="Header-inputs">
                <input type="text" />
            </div>
            <div className="Header-stream">
                <h3>⚪</h3>
            </div>
            <div className="Header-not">
                <h3>⚪</h3>
            </div>
            <div className="Header-accounts">
                <h3>⚪</h3>
            </div>
        </div>
                        
    )
}
