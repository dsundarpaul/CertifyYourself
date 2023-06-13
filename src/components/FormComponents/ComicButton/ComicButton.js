import React from "react";
import './ComicButtonStyles.css'

const ComicButton = ({ children }) => {
    return (
        <button className="comic-button">
            {children}
        </button>
    )
}

export default ComicButton;