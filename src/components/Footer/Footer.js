import React from 'react'
import styled from 'styled-components'
import myImg from '../img/Logo.png'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Twitter from '../img/Twitter.png'


const DivFooter = styled.div`
    background-color: #250045;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 100px;
        padding: 10px; 
    }
    h1{
        padding: 10px;
        color: white;
    }
`
const ContainerRedes = styled.div`
    display: flex;
    img{
        width: 60px;
        padding: 15px;
    }
`

export default class Footer extends React.Component {
    render() {
        return (
            <DivFooter>
                <ContainerLogo>
                    <img src={myImg} />
                    <h1>Os ninjas estão à sua espera...</h1>
                </ContainerLogo>
                <ContainerRedes>
                    <a href='https://www.facebook.com/profile.php?id=100080095552686' target='_blank' ><img src={Facebook} /></a>
                    <a href='https://www.instagram.com/labninjasgrp2/' target='_blank' ><img src={Instagram} /></a>
                    <a href='https://www.twitter.com/labninjasgrp2/' target='_blank' ><img src={Twitter} /></a>
                </ContainerRedes>
            </DivFooter>
        )
    }
}
