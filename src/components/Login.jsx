import React from 'react';
import styled from "styled-components";
export default function Login()
{
    const handleClick= async ()=>{
       const clientId="e91bce4a1f7d46d6b03cc86f732c1758";
       const redirectUrl="http://localhost:3000/";
       const apiUrl = "https://accounts.spotify.com/authorize";
       const scope = [
         "user-read-private",
         "user-read-email",
         "user-modify-playback-state",
         "user-read-playback-state",
         "user-read-currently-playing",
         "user-read-recently-played",
         "user-top-read",
       ];
       window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
      )}&response_type=token&show_dialog=true`;
    };
    return (
        <Container>
            <h1><i>HarmoniStream🎧</i></h1>
            <button onClick={handleClick}> Connect HarmoniStream</button>
        </Container>
    );
}
const Container=styled.div`
display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 height: 100vh;
 width: 100vw;
 background-color: blueviolet;
 gap:5rem;
 h1{
    color: white;
    font-size: 6rem;
    text-shadow: 3px 2px black;
 }

 button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
 }
`;
 

