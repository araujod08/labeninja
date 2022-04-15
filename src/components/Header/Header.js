import React from 'react'
import styled from 'styled-components'
import myImg from '../img/Logo.png'

const DivHeader = styled.div`
    background-color: #250045;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 80px;
        padding: 10px;   
    }
    h1{
        padding: 10px;
        color: white;
        font-size: 20px;
}
`

const ContainerBotoes = styled.div`
    display: flex;
    padding: 50px;
    flex-wrap: wrap;
    button{
        margin: 5px;
        width: 100px;
        height: 35px;
        background-color: #02A499;
        color: white;
        border: none;
        transition-duration: 0.3s;
        border-radius: 180px;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: #250045;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
        img{
        width: 80px;
        padding: 15px;
        }
    }
`

export default class Header extends React.Component {
    render() {
        return (
            <DivHeader>
                <ContainerLogo>
                    <img src={myImg} alt='Logo' />
                    <h1>LabeNinjas</h1>
                </ContainerLogo>
                <ContainerBotoes>
                    <button onClick={this.props.irParaHome}>Home</button>
                    <button onClick={this.props.irParaCadastro}>Cadastro</button>
                    <button onClick={this.props.irParaServico}>Serviços</button>
                    <button onClick={this.props.irParaCarrinho}>Carrinho</button>
                </ContainerBotoes>
            </DivHeader>
        )
    }
}
