import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import UserContext from "./UserContext";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>about</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>Food app</h1>
        <User name={"Jamal(functional)"} Location={"Trichy"}></User>
        <UserClass name={"first"} Location={"de"}></UserClass>
      </div>
    );
  }
}

export default About;
