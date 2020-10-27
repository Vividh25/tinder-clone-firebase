import React from "react";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Monica Hall"
                message="Heyy"
                timestamp="35 minutes ago"
                profilePic="https://i.pinimg.com/originals/ed/64/0c/ed640cb0d3f2a2d64beabbf8f13a2cd7.jpg"
            />
            <Chat
                name="Richard Hendricks"
                message="I gotta puke"
                timestamp="5 minutes ago"
                profilePic="https://i.pinimg.com/originals/2d/62/6e/2d626e344c524ae2b9f9df060fce13a5.jpg"
            />
            <Chat
                name="Erlich Bachman"
                message="Jian-Yang!!!!"
                timestamp="3 minutes ago"
                profilePic="https://techcrunch.com/wp-content/uploads/2017/05/o-silicon-valley-facebook.jpg"
            />
            <Chat
                name="Big Head"
                message="Wait what were you saying?"
                timestamp="20 minutes ago"
                profilePic="https://i.insider.com/57be16fadb5ce94e008b8be7?width=1100&format=jpeg&auto=webp"
            />
        </div>
    );
}

export default Chats;
