import React from 'react';

const FollowersCard = props => {
    console.log(props);
  return (
    <div>
    {props.followers.map(data => {
        return (
            <div>
                <img src={data.avatar_url} alt="profile" />
                <h2>{data.login}</h2>
            </div>
        )
    })}
    </div>
  )
};

export default FollowersCard