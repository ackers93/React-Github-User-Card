import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    border: 1px solid black;
    padding: 30px;
    max-width: 400px;
    background-color: white;
    filter: drop-shadow(-20px 10px 10px darkgrey); 
    border-radius: 6px;  
    padding: 2%;
`
const ProfilePic = styled.img`
max-width: 400px;
min-width: 400px;
`

const UserCard = props => {
  return (
    <Card>
    <ProfilePic src={props.users.avatar_url} alt="profile" />
    <h1>{props.users.name}</h1>
    <h2>{props.users.login}</h2>
    <h3>{props.users.bio}</h3>
    <h3>Followers: {props.users.followers}</h3>
    <h3>Following: {props.users.following}</h3>
    </Card>
  );
};

export default UserCard