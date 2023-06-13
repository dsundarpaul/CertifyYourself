import React from "react";
import './ComicSwitchStyles.css';

const ComicSwitch = () => {
    return (
        <div>
            <label className="switch">
                <input className="toggle" type="checkbox" />
                <span className="slider"></span>
                <span className="card-side"></span>
            </label>
        </div>
    )
}

export default ComicSwitch;