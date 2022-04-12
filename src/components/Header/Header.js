import React from 'react'
import styled from 'styled-components'
import myImg from '../img/Logo.png'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Twitter from '../img/Twitter.png'


const DivHeader = styled.div`
    background-color:pink;
    height: 15vh;
    display: flex;
    justify-content: space-around;
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
    padding:0 17px;  
}
`
const ContainerBotoes =styled.div`
    display: flex;
img{
    width: 80px;
    padding: 15px;
}
`

export default class Header extends React.Component {
    render() {
        return (
            <DivHeader>
                <ContainerLogo>
                    <img src={myImg} />
                    <h1>LabeNinjas</h1>
                </ContainerLogo>
                <ContainerBotoes>
                    <button onClick={this.props.irParaHome}>Home</button>
                    <button onClick={this.props.irParaCadastro}>Cadastro</button>
                    <button onClick={this.props.irParaServico}>Serviços</button>
                    <button>Carrinho</button>
                </ContainerBotoes>
            </DivHeader>
        )
    }
}
