import React from 'react'
import styled from 'styled-components'

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
export default class CardServicos extends React.Component {

    render() {

        const diversosServicos = this.props.arrayDeServicos.filter(servicos => {
            return this.props.inputMin === '' || servicos.price >= this.props.inputMin
        }).filter(servicos => {
            return this.props.inputMax === '' || servicos.price <= this.props.inputMax
        }).filter(servicos => {
            return servicos.title.toUpperCase().includes(this.props.inputName.toUpperCase())
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
