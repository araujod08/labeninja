import React from 'react'
import PaginaCadastro from './components/PaginaCadastro/PaginaCadastro'
import { PaginaServico } from './components/PaginaServico/PaginaServico'
import Home from './components/Home/Home'

export default class App extends React.Component {
    state = {
        telaAtual: "home",
    }

    escolheTela = () => {
        switch (this.state.telaAtual) {
            case "home":
                return <Home irParaCadastro={this.irParaCadastro} irParaServico={this.irParaServico} />
            case "souninja":
                return <PaginaCadastro irParaHome={this.irParaHome} irParaServico={this.irParaServico} />
            case "servico":
                return <PaginaServico irParaHome={this.irParaHome} irParaCadastro={this.irParaCadastro} />
            default:
                return <div>Erro! Os ninjas roubaram a pagina.</div>
        }
    }

    irParaCadastro = () => {
        this.setState({ telaAtual: "souninja" })
    }

    irParaServico = () => {
        this.setState({ telaAtual: "servico" })
    }

    irParaHome = () => {
        this.setState({ telaAtual: "home" })
    }

    render() {
        return (
            <div>
                {this.escolheTela()}

            </div>
        )
    }
}