import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const ContainerCardDetalhes = styled.div`
border-top: 10px solid #250045;
border-right: 10px solid #02A499;
border-bottom: 10px solid #250045;
border-left: 10px solid #02A499;
padding: 15px;
border-radius: 10px;
display: grid;
background-color: white;
margin: 20px;
p{
    font-size: 18px;
    font-weight: bold;
}
`

const DivFilho = styled.div`
flex-grow: 1;
text-align: center;
justify-content: center;
align-items: center;
margin: 0 auto;
`

const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

const BaseUrl = 'https://labeninjas.herokuapp.com/'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

export default class CardDetalhes extends React.Component {
    state = {
        detalhe: [],
    }

    componentDidMount = () => {
        this.getServiceById(this.props.id)
    }

    getServiceById = async (serviceID) => {
        try {
            const response = await axios.get(`${BaseUrl}jobs/${serviceID}`, headers)
            const copia = [...this.state.detalhe, response.data]
            this.setState({ detalhe: copia })

        } catch (err) {
            console.log(err.response)
            alert(err.response.data.message)
        }
    }

    render() {

        const detalhesServicos = this.state.detalhe.map((servicos) => {
            const newDate = servicos.dueDate.slice(0, 10).split('-').reverse().join('/')

            return (
                <ContainerCardDetalhes key={servicos.id}>
                    <p>{servicos.title}</p>
                    <div>
                        <p>Descrição: {servicos.description}</p>
                    </div>
                    <div>
                        <p>Forma de pagamento: {servicos.paymentMethods.join(' - ')}</p>
                    </div>
                    <div>
                        <p>Até {newDate} por R${servicos.price} </p>
                    </div>
                </ContainerCardDetalhes>
            )
        })

        return (
            <ContainerDetalhes>
                <Header irParaServico={this.props.irParaServico} irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} />
                <DivFilho>
                    {detalhesServicos}
                </DivFilho>
                <Footer />
            </ContainerDetalhes>
        )
    }
}
