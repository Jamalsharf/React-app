import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        Location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Jamalsharf");
    const json = await data.json();
    //console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    //console.log("componentdidUpdate")
  }
  componentWillUnmount() {
    //console.log("componentunmount")
  }

  render() {
    const { name, location, twitter_username, bio, avatar_url } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Bio : {bio}</h3>
        <h3>Twitter : {twitter_username}</h3>
      </div>
    );
  }
}

export default UserClass;
