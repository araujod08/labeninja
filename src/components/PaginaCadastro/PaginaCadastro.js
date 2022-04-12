import React from 'react'
import styled from "styled-components"
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export default class PaginaCadastro extends React.Component {
    state = {
        checkboxBoleto: false,
        checkboxCartaodeCredito: false,
        checkboxCartaodeDebito: false,
        checkboxPix: false,
        checkboxPayPal: false,
        inputData: "",

    }

    onChangeData = (event) => {
        this.setState({
            inputData: event.target.value
        })
    }

    createJob = () => {
        const pagamentos = []
        if (this.state.checkboxBoleto)
            pagamentos.push("Boleto")

        if (this.state.checkboxCartaodeCredito)
            pagamentos.push("Cartao de Crédito")

        if (this.state.checkboxCartaodeDebito)
            pagamentos.push("Cartao de Débito")

        if (this.state.checkboxPix)
            pagamentos.push("Pix")

        if (this.state.checkboxPayPal)
            pagamentos.push("PayPal")
    }

    render() {
        return (
            <div>
                <h1>Cadastre o seu serviço</h1>
                <div>
                    <input
                        placeholder='titulo'
                        value=''
                        onChange=''
                    />
                    <input
                        placeholder='descrição'
                        value=''
                        onChange=''
                    />
                    <input
                        placeholder='preço'
                        value=''
                        onChange=''
                    />
                    <input
                        value={this.state.inputData}
                        onChange={this.onChangeData}
                        type='date'
                    />
                    <div>
                        <p>Formas de Pagamentos:</p>
                        <input
                            type="checkbox"
                            id="cartao-de-credito"
                            name="cartao-de-credito"
                            value={"Cartão de crédito"}
                            onChange={this.onChangeCartaodeCredito}
                        />
                        <label for="cartao-de-credito">Cartão de crédito</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="cartao-de-debito"
                            name="cartao-de-debito"
                            value={"Cartão de débito"}
                            onChange={this.onChangeCartaodeDebito}
                        />
                        <label for="cartao-de-debito">Cartão de débito</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="payPal"
                            name="payPal"
                            value={"PayPal"}
                            onChange={this.onChangePayPal}
                        />
                        <label for="payPal">PayPal</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="boleto"
                            name="boleto"
                            value={"Boleto"}
                            onChange={this.onChangeBoleto}
                        />
                        <label for="boleto">Boleto</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="pix"
                            name="pix"
                            value={"Pix"}
                            onChange={this.onChangePix}
                        />
                        <label for="pix">Pix</label>
                    </div>
                </div>
            </div>
        )
    }
}
