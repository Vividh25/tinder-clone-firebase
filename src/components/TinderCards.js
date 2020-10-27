import React, { useState, useEffect } from "react";
import "../styles/TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "../firebase";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        database
            .collection("people")
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: ", nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
        <div>
            <div className="tindercards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
