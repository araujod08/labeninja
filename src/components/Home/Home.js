import React from 'react'
import styled from 'styled-components'
import myImg from '../img/Logo.png'


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    color: white; 
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #250045;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
`

const DivEsquerda = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    min-width: 960px;
    img{
        width: 500px;
    }
`
const DivDireita = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    button{
        margin: 20px;
        width: 250px;
        height: 35px;
        background-color: #02A499;
        color: white;
        border: none;
        transition-duration: 0.4s;
        border-radius: 180px;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: #250045;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
    }
`

const DivBotoes = styled.div`
    padding: 50px;
`

export default class Home extends React.Component {

    render() {
        return (
            <GlobalStyles>
                <DivContainer>
                    <DivEsquerda>
                        <img src={myImg} alt="logo labeninjas"></img>
                        <h1>Os ninjas estão por toda parte.</h1>
                    </DivEsquerda>
                    <DivDireita>
                        <h1>Se você é um deles, bem-vindo.<br></br>Se precisar de algum deles, bem-vindo também.</h1>
                        <DivBotoes>
                            <button onClick={this.props.irParaCadastro}>
                                Sou um ninja
                            </button>
                            <button onClick={this.props.irParaServico}>
                                Contrate um ninja
                            </button>
                        </DivBotoes>
                    </DivDireita>
                </DivContainer>
            </GlobalStyles>
        )
    }
}