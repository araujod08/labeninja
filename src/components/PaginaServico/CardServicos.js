import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardDetalhes from './CardDetalhes'

const ContainerCardServicos = styled.div`
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
const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const DivValor = styled.div`
    p{
        text-decoration: underline;
    }
`

const DivPrazo = styled.div`
    p{
        text-decoration: underline;
    }
`

const ContainerDiversosServicos = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(220px, 260px));
    gap: 50px;
    justify-content: center;
`

const BaseUrl = 'https://labeninjas.herokuapp.com/'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

export default class CardServicos extends React.Component {
    state = {
        jobsDetails: [],
    }

    getServiceById = async (serviceID) => {
        try {
            const response = await axios.get(`${BaseUrl}jobs/${serviceID}`, headers)

            const copia = [...this.state.jobsDetails, response.data]
            this.setState({ jobsDetails: copia })

        } catch (err) {
            console.log(err.response)
            alert(err.response.data.message)
        }
    }

    render() {

        const diversosServicos = this.props.arrayDeServicos.filter(servicos => {
            return this.props.inputMin === '' || servicos.price >= this.props.inputMin
        }).filter(servicos => {
            return this.props.inputMax === '' || servicos.price <= this.props.inputMax
        }).filter(servicos => {
            return servicos.title.toUpperCase().includes(this.props.inputName.toUpperCase())
        }).sort((produtoA, produtoB) => {
            switch (this.props.inputOrdenacao) {
                case 'crescente':
                    return produtoA.price - produtoB.price
                case 'decrescente':
                    return produtoB.price - produtoA.price
                case 'titulo':
                    return produtoA.title.localeCompare(produtoB.title)
                case 'data':
                    return Date.parse(produtoA.dueDate) - Date.parse(produtoB.dueDate)
            }
        })

            .map((servicos) => {
                const newDate = servicos.dueDate.slice(0, 10).split('-').reverse().join('/')
                return (
                    <ContainerCardServicos key={servicos.id}>
                        <p>{servicos.title}</p>
                        <DivContainer>
                            <DivValor>
                                <p>Valor</p>
                                <span>R${servicos.price}</span>
                            </DivValor>
                            <DivPrazo>
                                <p>Prazo</p>
                                <span>Até {newDate}</span>
                            </DivPrazo>
                            <button onClick={()=>this.props.irParaDetalhes (servicos.id)}>
                                Detalhes</button>
                            {/* <CardDetalhes irParaDetalhes={this.props.irParaDetalhes} jobsDetails={this.state.jobsDetails} /> */}
                        </DivContainer>
                    </ContainerCardServicos>
                )
            })
        return (
            <ContainerDiversosServicos>
                {diversosServicos}
            </ContainerDiversosServicos >
        )
    }
}
