import React from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SuperContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const DivGlobal = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px auto;
    border-radius: 20px;
`
const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px;
    width: 500px;
    height: 300px;
    background-color: #250045;
    border: 5px solid white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
`
const DivTitulo = styled.div`
    text-align: center;
    color: white;
    text-decoration: underline;
`

const DivBotoes = styled.div`
    button{
        margin: 5px;
        width: 150px;
        height: 35px;
        background-color: #02A499;
        color: white;
        border: none;
        transition-duration: 0.3s;
        border-radius: 180px;
        margin-top: 50px;
        cursor: pointer;
    }
    button:hover{
        background-color: white;
        color: #250045;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
    }
`

const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

export default class Carrinho extends React.Component {
    state = {
        cart: []
    }
    componentDidMount = () => {
        this.getAllJobs()
    }
    getAllJobs = () => {
        axios.get(`${BaseUrl}/jobs`, headers)
            .then((res) => {
                this.setState({
                    cart: res.data.jobs
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

    render() {
        const service = this.state.cart.length > 0 ? this.state.cart.filter(service => service.taken === true).map(service => {
            return (
                <DivCard key={service.id}>
                    <DivTitulo>
                        <h1>{service.title}</h1>
                        <h2>R$ {service.price}</h2>
                    </DivTitulo>
                    <DivBotoes >
                        <button onClick={() => alert('serviço contrartado com sucesso')}>Contratar</button>
                        <button onClick={() => this.updateJob(service.id, service.taken)}>Remover</button>
                    </DivBotoes>
                </DivCard>
            )
        }) : <p> Carregando </p>
        const vazio = <p>O carrinho está vazio</p>
        return (
            <SuperContainer>
                <Header irParaServico={this.props.irParaServico} irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} />
                <DivGlobal>
                    {(service.length === 0 && this.state.cart.length > 0) ? vazio : service}
                </DivGlobal>
                <Footer />
            </SuperContainer>
        )
    }
}