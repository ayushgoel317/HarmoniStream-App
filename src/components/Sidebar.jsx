import React from 'react';
import styled from "styled-components";
import {IoLibrary} from "react-icons/io5";
import {MdHomeFilled, MdSearch} from "react-icons/md";
import Playlists from "./Playlists";
export default function Sidebar()
{
    return (
     <Container>
        <div className='top__links'>
            <div className='logo'>
            <h2><i>HarmoniStream🎧</i></h2>
            </div>
            <ul>
                <li>
                 <MdHomeFilled/>
                 <span>Home</span>
                </li>
                <li>
                <MdSearch/>
                <span>Search</span>
                </li>
                <li>
                <IoLibrary/>
                <span>Your Library</span>
                </li>
            </ul>
        </div>
        <Playlists/>
    </Container>
    );
}
const Container = styled.div`

background-color:black;
display:flex;
flex-direction: column;
height: 100%;
width:100%;
color: white;
.top__links{
    display:flex;
    flex-direction: column;
    .logo{
        text-align: center;
        margin: 1rem 0;

    }
    ul{
        list-style-type: none;
        display: flex;
        flex-direction:column;
        gap:1rem;
        padding:1rem;
        li{
            display: flex;
            gap:1rem;
            cursor:pointer;
            transition: 0.3s ease-in-out;
            &:hover{
                color:grey;
            }
        }
    }
}
h2{
    color: white;
   
    text-shadow: 3px 2px black;
 }
 `;