import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CardServicos from './CardServicos'
import axios from 'axios'
import CardDetalhes from './CardDetalhes'

const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

export class PaginaServico extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount = () => {
        this.getAllJobs()
    }


    getAllJobs = () => {
        axios.get(`${BaseUrl}/jobs`, headers)
        .then((res)=>{
            // console.log(res.data.jobs)
            this.setState({
                jobs: res.data.jobs
            })
        })
        .catch((err)=>{
            console.log(err)
            alert('Ocorreu um erro, tente novamente')
        })
    }

    render() {
        return (
            <div>
                <Header
                    irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} />
                <div>
                <input
                    type="number"
                    value={this.props.minFilter}
                    onChange={this.props.onChangeMinFilter}
                    placeholder="Valor mínimo"
                />
                <input
                    type="number"
                    value={this.props.maxFilter}
                    onChange={this.props.onChangeMaxFilter}
                    placeholder="Valor máximo"
                />
                <input
                    type="text"
                    value={this.props.nameFilter}
                    onChange={this.props.onChangeNameFilter}
                    placeholder="Buscar"
                />
                <select onChange={this.onChangeOrdenacao} name="sort">
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                    <option value="decrescente">Preço</option>
                    <option value="decrescente">Data</option>
                </select>
                </div>
                <CardServicos
                    arrayDeServicos={this.state.jobs}
                />
                {/* <CardDetalhes
                    arrayDeServicos={this.state.jobs}
                /> */}
                <Footer />
            </div>
        )
    }
}