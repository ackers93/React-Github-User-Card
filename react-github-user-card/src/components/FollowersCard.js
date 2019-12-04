import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`

const Card = styled.div`
    border: 1px solid black;
    background-color: white;
    max-width: 400px;
    filter: drop-shadow(-20px 10px 10px darkgrey);  
    border-radius: 6px; 
    padding: 1%;
`
const ProfilePic = styled.img`
width: 300px;
`

const FollowersCard = props => {
    console.log(props);
  return (
    <CardContainer>

    {props.followers.map(data => {
        return (
            <Card>
                <ProfilePic src={data.avatar_url} alt="profile" />
                <h2>{data.login}</h2>
            </Card>
        )
    })}
    </CardContainer>
  )
};

export default FollowersCard