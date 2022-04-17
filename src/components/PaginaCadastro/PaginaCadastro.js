import React from 'react'
import axios from 'axios'
import styled from "styled-components"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

const SuperContainerCadastro = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const ContainerMain = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px auto;
    background: #250045;
    width: 800px;
    border-radius: 20px;
    box-shadow: 20px 20px 50px grey;
`
const DivTitulo = styled.div`
    text-align: center;
    color: white;
    text-decoration: underline;
`
const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px;
    input{
        width: 500px;
        height: 30px;
        margin: 0 auto;
        margin: 5px;
        border: none;
        border-radius: 10px;
    }
`
const DivPagamentos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    h1{
        text-decoration: underline;
    }
    div{
        display: flex;
        flex-direction: row;
    }
    input{
        cursor: pointer;
        top: 0;
        left: 0;
        height: 18px;
        width: 25px;
        border-radius: 50%;
    }
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

    CreateJob = async () => {
        let checagem = false, checagem2 = false

        !this.state.inputTitulo || !this.state.inputDescricao || !this.state.inputPreco || !this.state.inputData ?
            alert("Todos os campos Título, Descrição, Preço e Data devem estar preenchidos")
            : checagem = true

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

        pagamentos.length > 0 ? checagem2 = true : alert('Escolha um forma de pagamento para oferecer aos seus clientes')

        if (checagem && checagem2) {
            const body = {
                title: this.state.inputTitulo,
                description: this.state.inputDescricao,
                price: +this.state.inputPreco,
                paymentMethods: pagamentos,
                dueDate: this.state.inputData
            }
            try {
                await axios.post(`${BaseUrl}/jobs`, body, headers)
                alert('serviço criado com sucesso')
            } catch (err) {
                console.log(err.response)
                err.response.data.message === "A data limite para a realização do serviço deve ser maior do que a data atual" ?
                    alert("A data limite para a realização do serviço deve ser maior do que a data atual") :
                    alert('Ocorreu um erro, por favor tente novamente mais tarde')
            }
        }
    }
    render() {
        return (
            <SuperContainerCadastro>
                <Header
                    irParaHome={this.props.irParaHome} irParaServico={this.props.irParaServico} irParaCarrinho={this.props.irParaCarrinho} />
                <ContainerMain>
                    <DivTitulo>
                        <h1>Cadastre o seu serviço</h1>
                    </DivTitulo>
                    <DivInputs>
                        <input
                            placeholder='Título'
                            value={this.state.inputTitulo}
                            onChange={this.onChangeInputTitulo}
                        />
                        <input
                            placeholder='Descrição'
                            value={this.state.inputDescricao}
                            onChange={this.onChangeInputDescricao}
                        />
                        <input
                            placeholder='Preço'
                            type='number'
                            value={this.state.inputPreco}
                            onChange={this.onChangeInputPreco}
                        />
                        <input
                            value={this.state.inputData}
                            onChange={this.onChangeData}
                            type='date'
                            min={new Date().toISOString().slice(0, 10)}
                        />
                    </DivInputs>
                    <DivPagamentos>
                        <h1>Formas de Pagamentos:</h1>
                        <div>
                            <input
                                type="checkbox"
                                id="cartao-de-credito"
                                name="pagamento"
                                value="Cartão de crédito"
                                onChange={this.onChangePagamentoCartaoDeCredito}
                            />
                            <label htmlFor="cartao-de-credito">Cartão de crédito</label>
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
                            <input
                                type="checkbox"
                                id="pix"
                                name="pagamento"
                                value="Pix"
                                onChange={this.onChangePagamentoPix}
                            />
                            <label htmlFor="pix">Pix</label>
                        </div>
                        <button onClick={this.CreateJob}>Criar Serviço</button>
                    </DivPagamentos>
                </ContainerMain>
                <Footer />
            </SuperContainerCadastro>
        )
    }
}
