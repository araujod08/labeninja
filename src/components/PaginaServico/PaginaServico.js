import React from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const SuperContainerServiços = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const SuperContainerCardServiços = styled.div`
    flex-grow: 1;
`

export class PaginaServico extends React.Component {

    render() {
        return (
            <SuperContainerServiços>
                <Header
                    irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} />
                <SuperContainerCardServiços>
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
                </SuperContainerCardServiços>

                <Footer />
            </SuperContainerServiços>
        )
    }
}