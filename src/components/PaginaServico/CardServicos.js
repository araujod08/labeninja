import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardDetalhes from './CardDetalhes'

const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

const ContainerCardServicos = styled.div`
    border-top: 10px solid #250045;
    border-right: 10px solid #02A499;
    border-bottom: 10px solid #250045;
    border-left: 10px solid #02A499;
    border-radius: 10px;
    display: grid;
    background-color: white;
    margin: 25px 10px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    h1{
        font-size: 18px;
        font-weight: bold;
        margin: 10px;
        text-decoration: underline;
    }
    p{
        font-weight: bold;
    }
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DivEnglobaMeio = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const DivValor = styled.div`
    margin: 5px;
    p{
        text-decoration: underline;
    }
`

const DivPrazo = styled.div`
    margin: 5px;
    p{
        text-decoration: underline;
    }
`
const DivBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        margin: 5px;
        width: 100px;
        height: 30px;
        background-color: #6101bd;
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
const ContainerDiversosServicos = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(220px, 260px));
    gap: 50px;
    justify-content: center;
`

export default class CardServicos extends React.Component {
    state = {
        cart: [],
        jobsDetails: [],
    }
    updateJob = async (serviceID, serviceTaken) => {
        let contracted
        serviceTaken ? contracted = false : contracted = true
        const body = {
            taken: contracted
        }
        try {
            await axios.post(`${BaseUrl}/jobs/${serviceID}`, body, headers)
            this.getServiceById(serviceID)
        } catch (err) {
            console.log(err.response)
            alert('Ocoreu um erro, por favor tente novamente mais tarde1')
        }
    }
    getServiceById = async (serviceID) => {
        try {
            await axios.get(`${BaseUrl}/jobs/${serviceID}`, headers)
        } catch (err) {
            console.log(err.response)
            alert('Ocoreu um erro, por favor tente novamente mais tarde2')
        }
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

        }).map((servicos) => {
            const newDate = servicos.dueDate.slice(0, 10).split('-').reverse().join('/')
            return (
                <ContainerCardServicos key={servicos.id}>
                    <h1>{servicos.title}</h1>
                    <DivContainer>
                        <DivEnglobaMeio>
                            <DivValor>
                                <p>Valor</p>
                                <span>R${servicos.price}</span>
                            </DivValor>
                            <DivPrazo>
                                <p>Prazo</p>
                                <span>Até {newDate}</span>
                            </DivPrazo>
                        </DivEnglobaMeio>
                        <DivBotoes>
                            <button onClick={() => this.props.irParaDetalhes(servicos.id)}>
                                Detalhes</button>
                            <button onClick={() => this.updateJob(servicos.id, servicos.taken)}>Comprar</button>
                        </DivBotoes>
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
