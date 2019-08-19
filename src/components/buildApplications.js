import React from 'react'

class BuildApplications extends React.Component {
    constructor(){
        super()
        this.state = {
            montoDeseado: 10000,
            tasaAnual: 5.6,
            plazoMeses: 12,
            pagoMensual: 880,
            comisionApertura: 348,
            montoNetoDepositado: 0,
            totalPagado: 0,
            CAT: 15.71
        }
    }

    //funciones
    componentWillMount(){
        this.cargarStates()
    }

    //cargar state
    cargarStates = async () => {
        this.setState({
            pagoMensual: await this.PagoMensual(),
            montoNetoDepositado: await this.MontoNetoDepositado(),
            totalPagado: await this.TotalPagado()
        })
    }

    //pago mensual
    PagoMensual = () => {
        const mon = this.state.montoDeseado
        const mes = this.state.plazoMeses
        const tas = this.state.tasaAnual
        const tasAnu = (tas * (mon / mes)) / 100
        return (mon / mes) + tasAnu
    }

    //monto neto depositado
    MontoNetoDepositado = () => {
        const mon = this.state.montoDeseado
        const com = this.state.comisionApertura
        return mon - com
    }

    //total pagado
    TotalPagado = async () => {
        // const mon = this.state.montoDeseado
        // const com = this.state.comisionApertura
        // const mes = this.state.plazoMeses
        // const tas = this.state.tasaAnual
        // const tasAnu = (tas * (mon / mes)) / 100
        // return (mon + com) + tasAnu

        const mes = this.state.plazoMeses
        const plz = await this.PagoMensual()
        return mes * plz
        
    }

    //click meses
    handleClickMeses = async (e) => {
        let elements = document.querySelectorAll('.inputCircle')
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active')
        }
        let elementActive = e.target.parentElement
        elementActive.classList.add('active')
        
        //actualizando
        let target = e.target.value
        await this.actualizarPlazoMeses(target)
        await this.cargarStates()
    }

    //actualizar pazo meses
    actualizarPlazoMeses = (target) => {
        this.setState({ plazoMeses: target })
    }

    //cambio monto
    handleChangeMonday = async (e) => {
        let target = e.target.value
        await this.actualizarMonto(target)
        await this.cargarStates()
    }

    //actualizar monto
    actualizarMonto = (target) => {
        this.setState({ montoDeseado: target })
    }

    //cambio tasa
    handleChangeTasa = async (e) => {
        let target = e.target.value
        await this.actualizarTasa(target)
        await this.cargarStates()
    }

    //actualizar tasa
    actualizarTasa = (target) => {
        this.setState({ tasaAnual: target })
    }

    render(){
        return (
            <React.Fragment>
                <section className="buildApplications">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="buildApplications-titulo">
                                    <h2>Build applications <b>faster</b></h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo earum obcaecati, ratione nam corrupti molestiae deleniti in velit temporibus atque excepturi voluptate tenetur fugiat sit</p>
                                    <p className="text-color">Lorem ipsum dolor, <b>$0.95</b> adipisicing elit. Dolorum, quod.</p>
                                    <div className="buildApplications-titulo-btns">
                                        <a className="btns btns-1 demo" href={'./'}>watch demo</a>
                                        <a className="btns btns-2" href={'./'}>start now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="simuladorCredito">
                                    <form className="simuladorCredito-body">
                                        <div className="simuladorCredito-top">
                                            <h4 className="titulo">Simulador de crédito</h4>
                                            <div className="inputRange">
                                                <label htmlFor="customRange1">Monto deseado</label>
                                                <span>{this.state.montoDeseado}</span>
                                                <input type="range" value={this.state.montoDeseado} step="1000" min="10000" max="100000" id="customRange1" onChange={this.handleChangeMonday}></input>
                                            </div>

                                            <div className="inputRange">
                                                <label htmlFor="customRange2">Tasa anual</label>
                                                <span>{this.state.tasaAnual} %</span>
                                                <input type="range" value={this.state.tasaAnual} step=".1" min="5.6" max="20" id="customRange2" onChange={this.handleChangeTasa}></input>
                                            </div>
                                        </div>
                                        <div className="simuladorCredito-center">
                                            <p>Plazo en meses</p>
                                            <div className="d-flex justify-content-around">
                                                <div className="inputCircle active">
                                                    <input type="radio" name="exampleRadios" id="exampleRadios1" value={12} checked={this.state.plazoMeses === 12} onChange={this.handleClickMeses}/>
                                                    <label htmlFor="">12</label>
                                                </div>
                                                <div className="inputCircle">
                                                    <input type="radio" name="exampleRadios" id="exampleRadios2" value={24} checked={this.state.plazoMeses === 24} onChange={this.handleClickMeses}/>
                                                    <label htmlFor="">24</label>
                                                </div>
                                                <div className="inputCircle">
                                                    <input type="radio" name="exampleRadios" id="exampleRadios3" value={36} checked={this.state.plazoMeses === 36} onChange={this.handleClickMeses}/>
                                                    <label htmlFor="">36</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="simuladorCredito-bottom">
                                            <div className="simuladorCredito-bottom-info">
                                                <p>Pago mensual</p>
                                                <span>$ {this.state.pagoMensual.toFixed(2)}</span>
                                            </div>
                                            <div className="simuladorCredito-bottom-info">
                                                <p>Comisión de apertura</p>
                                                <span>$ {this.state.comisionApertura.toFixed(2)}</span>
                                            </div>
                                            <div className="simuladorCredito-bottom-info">
                                                <p>Monto neto Depositado</p>
                                                <span>$ {this.state.montoNetoDepositado.toFixed(2)}</span>
                                            </div>
                                            <div className="simuladorCredito-bottom-info">
                                                <p>Total pagado</p>
                                                <span>$ {this.state.totalPagado.toFixed(2)}</span>
                                            </div>
                                            <div className="simuladorCredito-bottom-info">
                                                <p>CAT</p>
                                                <span>{this.state.CAT} %</span>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <a href={'/'} className="btns btns-2">Solicitar credito</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
            ) 
    }
}

export default BuildApplications
