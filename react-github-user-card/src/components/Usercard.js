import React from 'react';

const UserCard = props => {
  return (
    <div>
    <img src={props.users.avatar_url} alt="profile" />
    <h1>{props.users.name}</h1>
    <h2>{props.users.login}</h2>
    <h3>{props.users.bio}</h3>
    <h3>{props.users.followers}</h3>
    <h3>{props.users.following}</h3>
    </div>
  );
};

export default UserCard