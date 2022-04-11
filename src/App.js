import React from 'react'
import styled from 'styled-components'
// import { Serviços } from './components/PaginaServico/PaginaServico'
import Logo from './components/img/redes-sociais/Twitter.png'
import PaginaCadastro from './components/PaginaCadastro/PaginaCadastro'



const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color:#6101bd;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
`

const DivEsquerda = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

`
const DivDireita = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    
`


export default class App extends React.Component {
    render() {


        return (
            <GlobalStyles>
                {/* <DivContainer>
                    <DivEsquerda>
                    <img scr={Logo} alt="logo"></img>
                    <h1>labeninjas</h1>
                    </DivEsquerda>
                    <DivDireita>
                    <h2>depois A GENTE PENÇA</h2>
                    <button>
                        sou um ninja
                    </button>
                    <button>
                        preciso de um ninja
                    </button>
                    </DivDireita>
                    <Serviços />

                </DivContainer> */}
                <PaginaCadastro/>
            </GlobalStyles>
        )
    }
}