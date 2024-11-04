import React from "react";
import "./Youtube.css";

const YoutubeItem = (props) => {
    return (
        <div className="youtube">
            <img className="youtube-image" src={props.img} alt="" />
            <div className="youtube-metadescription">
                <div className="youtube-avatar">
                    <img src={props.img} alt="" />
                </div>
                <div className="youtube-info">
                    <div className="youtube-title">{props.title}</div>
                    <div className="youtube-author">{props.author}</div>
                </div>
            </div>
        </div>
    );
}

export default YoutubeItem;
