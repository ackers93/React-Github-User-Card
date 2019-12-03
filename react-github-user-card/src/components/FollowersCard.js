import React from 'react';

const FollowersCard = props => {
  return (
    <div>
    <img src={props.followers.avatar_url} alt="profile" />
    <h1>{props.followers.name}</h1>
    <h2>{props.followers.login}</h2>
    <h3>{props.followers.bio}</h3>
    <h3>{props.followers.followers}</h3>
    <h3>{props.followers.following}</h3>
    </div>
  );
};

export default FollowersCard