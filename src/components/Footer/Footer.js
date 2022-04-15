import React from 'react'
import styled from 'styled-components'
import myImg from '../img/Logo.png'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Twitter from '../img/Twitter.png'

const DivFooter = styled.div`
    background-color: #250045;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`
const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    img{
        max-width: 80px;
        padding: 10px; 
        margin-top: 1px;
    }
    h1{
        padding: 10px;
        color: white;
        font-size: 20px;
    }
`
const ContainerRedes = styled.div`
    display: flex;
    img{
        width: 50px;
        padding: 15px;
    }
`

export default class Footer extends React.Component {
    render() {
        return (
            <DivFooter>
                <ContainerLogo>
                    <img src={myImg} alt='Logo' />
                    <h1>Os ninjas estão a sua espera...</h1>
                </ContainerLogo>
                <ContainerRedes>
                    <a href='https://www.facebook.com/profile.php?id=100080095552686' target='_blank' rel="noopener noreferrer"><img src={Facebook} alt='Icone do FaceBook' /> </a>
                    <a href='https://www.instagram.com/labninjasgrp2/' target='_blank' rel="noopener noreferrer"><img src={Instagram} alt='Icone do Instagran' /></a>
                    <a href='https://www.twitter.com/labninjasgrp2/' target='_blank' rel="noopener noreferrer"><img src={Twitter} alt='Icone do Twitter' /></a>
                </ContainerRedes>
            </DivFooter>
        )
    }
}
