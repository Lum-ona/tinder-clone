import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);
  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removeing: " + nameToDelete);
  };
  const outOffFrame = (name) => {
    {
      console.log(name + " left the screen!");
    }
  };
  return (
    <div className="tinder_cards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLefScreen={() => outOffFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
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
