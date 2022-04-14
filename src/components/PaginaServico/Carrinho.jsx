import React from "react";
import axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
        let contracted
        serviceTaken ? contracted = false : contracted = true
        const body = {
            taken: contracted
        }
        try {
            await axios.post(`${BaseUrl}/jobs/${serviceID}`, body, headers)
            this.getAllJobs()
        } catch (err) {
            console.log(err.response)
            alert('Ocoreu um erro, por favor tente novamente mais tarde1')
        }
    }

    contratar = () => {
        alert('serviço contrartado com sucesso')
    }

    render() {
        const service = this.state.cart.filter(service => service.taken === true).map(service => {
            return (
                <>
                    <p>{service.title}</p>
                    <p>{service.price}</p>
                    <button onClick={this.contratar}>Contratar</button>
                    <button onClick={() => this.updateJob(service.id, service.taken)}>remover</button>

                </>
            )
        })
        return (
            <>
                <Header irParaServico={this.props.irParaServico} irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} />
                {service}
                <Footer />
            </>
        )
    }
}