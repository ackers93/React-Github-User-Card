import React from 'react';
import axios from "axios";
import UserCard from "./components/Usercard"
import FollowersCard from "./components/FollowersCard"
import styled from 'styled-components';

const CardList = styled.div`
  margin: 0 auto; 
  width: 90%;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    users: {},
    followers: [],
  };
  }

  fetchFollowers() {
    axios.get("https://api.github.com/users/ackers93/followers").then(response => {
      console.log(response);
      this.setState({ ...this.state, followers: response.data})
    })
    .catch(err => console.log(err));
  }

  componentDidMount() {
      axios.get("https://api.github.com/users/ackers93")
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch(err => console.log(err));
      this.fetchFollowers();
  }

  render() {  
    return (
      <CardList className="App">
        <UserCard users={this.state.users}/>
        <FollowersCard followers={this.state.followers}/>
      </CardList>
    )
  } 
}


export default App;
