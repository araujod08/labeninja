import React from 'react'
import styled from 'styled-components'

const ContainerCardDetalhes = styled.div`
border: 3px outset black;
padding: 15px;
border-radius: 25px;
width: 200px;
text-align: center;
`

const ContainerDetalhes = styled.div`
display: flex;
flex-direction: row;
`

export default class CardDetalhes extends React.Component {



  render() {

    const detalhesServicos = this.props.arrayDeServicos.map((servicos) => {
        const newDate = servicos.dueDate.slice(0, 10).split('-').reverse().join('/')

        return (
            <ContainerCardDetalhes key={servicos.id}>
                <p>{servicos.title}</p>
                <div>
                    <p>{servicos.description}</p>
                </div>
                <div>
                    <p>{servicos.paymentMethods}</p>
                </div>
                <div>
                    <p>Até {newDate} por {servicos.price} </p>
                </div>
            </ContainerCardDetalhes>
        )
    })

    return ( 
      <ContainerDetalhes>
          {detalhesServicos}
      </ContainerDetalhes>
    )
  }
}
