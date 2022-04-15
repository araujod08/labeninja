import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CardServicos from './CardServicos'
import axios from 'axios'
import styled from 'styled-components'

const MegaContainerServicos = styled.section`
    flex-direction: column;
    display: flex;
    height: 100vh;
`
const SuperContainerServicos = styled.div`
    flex-grow: 1;
`
const DivContainerFiltro = styled.div`
    background-color: white;
`

const DivFiltro = styled.div`
    display: flex;
    justify-content: space-evenly;
    input{
        width: 300px;
        height: 30px;
        margin: 0 auto;
        margin: 5px;
        border: 3px solid #250045;
        border-radius: 10px;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
    }
    select{
        width: 300px;
        height: 40px;
        margin: 0 auto;
        margin: 5px;
        border: 3px solid #250045;
        border-radius: 10px;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
    }
`
const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

export class PaginaServico extends React.Component {
    state = {
        jobs: [],
        inputMin: '',
        inputMax: '',
        inputName: '',
        inputOrdenacao: 'crescente',
    }

    componentDidMount = () => {
        this.getAllJobs()
    }

    handleInputMin = (event) => {
        this.setState({ inputMin: event.target.value })
    }
    handleInputMax = (event) => {
        this.setState({ inputMax: event.target.value })
    }
    handleInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }
    handleInputOrdenacao = (event) => {
        this.setState({ inputOrdenacao: event.target.value })
    }

    getAllJobs = () => {
        axios.get(`${BaseUrl}/jobs`, headers)
            .then((res) => {
                this.setState({
                    jobs: res.data.jobs
                })
            })
            .catch((err) => {
                console.log(err)
                alert('Ocorreu um erro, tente novamente')
            })
    }
    updateJob = async (serviceID, serviceTaken) => {
        const body = {
            taken: !serviceTaken
        }
        try {
            await axios.post(`${BaseUrl}/jobs/${serviceID}`, body, headers)
            this.getAllJobs()
        } catch (err) {
            console.log(err.response)
            alert('Ocoreu um erro, por favor tente novamente mais tarde1')
        }
    }
    updateTaken = (id, taken) => {
        if (!taken) {
            const jobUpdate = this.state.jobs.map(job => job.id === id ? { ...job, taken: true } : job)
            this.setState({ jobs: jobUpdate })
            this.updateJob(id, taken)
        } else {
            alert('você já adicionou esse serviço ao carrinho')
        }
    }

    render() {
        return (
            <MegaContainerServicos>
                <Header
                    irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} irParaCarrinho={this.props.irParaCarrinho} />
                <SuperContainerServicos>
                    <DivContainerFiltro>
                        <DivFiltro>
                            <input
                                type="number"
                                value={this.state.inputMin}
                                onChange={this.handleInputMin}
                                placeholder="Valor mínimo"
                            />
                            <input
                                type="number"
                                value={this.state.inputMax}
                                onChange={this.handleInputMax}
                                placeholder="Valor máximo"
                            />
                            <input
                                type="text"
                                value={this.state.inputName}
                                onChange={this.handleInputName}
                                placeholder="Buscar"
                            />
                            <select onChange={this.handleInputOrdenacao} name="sort" value={this.state.inputOrdenacao}>
                                <option value="crescente">Preço crescente</option>
                                <option value="decrescente">Preço decrescente</option>
                                <option value="titulo">Ordem alfabética</option>
                                <option value="data">Data</option>
                            </select>
                        </DivFiltro>
                    </DivContainerFiltro>
                    <CardServicos
                        arrayDeServicos={this.state.jobs}
                        inputMin={this.state.inputMin}
                        inputMax={this.state.inputMax}
                        inputName={this.state.inputName}
                        inputOrdenacao={this.state.inputOrdenacao}
                        irParaCarrinho={this.props.irParaCarrinho}
                        inputAlfabetica={this.state.inputAlfabetica}
                        irParaDetalhes={this.props.irParaDetalhes}
                        getAllJobs={this.getAllJobs}
                        updateTaken={this.updateTaken}
                    />
                </SuperContainerServicos>
                <Footer />
            </MegaContainerServicos>
        )
    }
}