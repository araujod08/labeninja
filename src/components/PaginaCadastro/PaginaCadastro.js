import React from 'react'

import axios from 'axios'

import styled from "styled-components"
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}


export default class PaginaCadastro extends React.Component {
    state = {
        checkboxCartaodeCredito: '',
        checkboxCartaodeDebito: '',
        checkboxPayPal: '',
        checkboxBoleto: '',
        checkboxPix: '',
        inputData: '',
        inputTitulo: '',
        inputDescricao: '',
        inputPreco: '',
        arrayPagamentos: []
    }

    onChangeInputTitulo = (event) => {
        this.setState({ inputTitulo: event.target.value })
    }
    onChangeInputDescricao = (event) => {
        this.setState({ inputDescricao: event.target.value })
    }
    onChangeInputPreco = (event) => {
        this.setState({ inputPreco: event.target.value })
    }

    onChangeData = (event) => {
        this.setState({
            inputData: event.target.value
        })
        console.log(this.state.inputData)
    }
    onChangePagamentoCartaoDeCredito = (event) => {
        !this.state.checkboxCartaodeCredito ? this.setState({ checkboxCartaodeCredito: event.target.value }) : this.setState({ checkboxCartaodeCredito: '' })

    }
    onChangePagamentoCartaodeDebito = (event) => {
        !this.state.checkboxCartaodeDebito ? this.setState({ checkboxCartaodeDebito: event.target.value }) : this.setState({ checkboxCartaodeDebito: '' })

    }
    onChangePagamentoPayPal = (event) => {
        !this.state.checkboxPayPal ? this.setState({ checkboxPayPal: event.target.value }) : this.setState({ checkboxPayPal: '' })

    }
    onChangePagamentoBoleto = (event) => {
        !this.state.checkboxBoleto ? this.setState({ checkboxBoleto: event.target.value }) : this.setState({ checkboxBoleto: '' })

    }
    onChangePagamentoPix = (event) => {
        !this.state.checkboxPix ? this.setState({ checkboxPix: event.target.value }) : this.setState({ checkboxPix: '' })

    }
    setPaymentMetods = () => {
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

    CreateJob = async () => {
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

        const body = {
            title: this.state.inputTitulo,
            description: this.state.inputDescricao,
            price: +this.state.inputPreco,
            paymentMethods: pagamentos,
            dueDate: this.state.inputData
        }
        try {
            const response = await axios.post(`${BaseUrl}/jobs`, body, headers)
            alert('serviços criado com sucesso')
        } catch (err) {
            alert('Ocorreu um erro, por favor tente novamente mais tarde')
            console.log(err.response)
        }
    }
    render() {
        return (
            <div>
                <h1>Cadastre o seu serviço</h1>
                <div>
                    <input
                        placeholder='titulo'
                        value={this.state.inputTitulo}
                        onChange={this.onChangeInputTitulo}
                    />
                    <input
                        placeholder='descrição'
                        value={this.state.inputDescricao}
                        onChange={this.onChangeInputDescricao}
                    />
                    <input
                        placeholder='preço'
                        type='number'
                        value={this.state.inputPreco}
                        onChange={this.onChangeInputPreco}
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
                            name="pagamento"
                            value="Cartão de crédito"
                            onChange={this.onChangePagamentoCartaoDeCredito}
                        />
                        <label htmlFor="cartao-de-credito">Cartão de crédito</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="cartao-de-debito"
                            name="pagamento"
                            value="Cartão de débito"
                            onChange={this.onChangePagamentoCartaodeDebito}
                        />
                        <label htmlFor="cartao-de-debito">Cartão de débito</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="payPal"
                            name="pagamento"
                            value="PayPal"
                            onChange={this.onChangePagamentoPayPal}
                        />
                        <label htmlFor="payPal">PayPal</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="boleto"
                            name="pagamento"
                            value="Boleto"
                            onChange={this.onChangePagamentoBoleto}
                        />
                        <label htmlFor="boleto">Boleto</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="pix"
                            name="pagamento"
                            value="Pix"
                            onChange={this.onChangePagamentoPix}
                        />
                        <label htmlFor="pix">Pix</label>
                    </div>
                </div>
                <select multiple size={2} >
                    <option>
                        asdasd
                    </option>
                    <option>
                        asdasd
                    </option>
                </select>
                <button onClick={this.CreateJob} >Criar Serviço</button>
            </div>

        )
    }
}
