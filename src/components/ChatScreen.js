import React, { useState } from "react";
import "../styles/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Monica Hall",
            image:
                "https://i.pinimg.com/originals/ed/64/0c/ed640cb0d3f2a2d64beabbf8f13a2cd7.jpg",
            message: "Heyy",
        },
        {
            message: "Heyy! How is it going ?",
        },
        // {
        //     name: "Richard Hendricks",
        //     image:
        //         "https://i.pinimg.com/originals/2d/62/6e/2d626e344c524ae2b9f9df060fce13a5.jpg",
        //     message: "Why am I not surprised LOL",
        // },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };
    // console.log("input>>>", input);
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH MONICA ON 10/08/20
            </p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">
                            {message.message}
                        </p>
                    </div>
                )
            )}
            <div>
                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        type="text"
                        placeholder="Type a message..."
                    />
                    <button
                        onClick={handleSend}
                        type="submit"
                        className="chatScreen__button"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;
