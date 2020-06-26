import React, { Component } from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
export default class Services extends Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: false,
        }).init();
    }
    render() {
        return (
            <section id="services" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="display-3 text-center font-weight-bold">What</h1>
                            <h1 className="display-3 text-center font-weight-bold">We Do</h1>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="row service-row">
                                <div className="col-md-6 col-12 service-card wow fadeInUp">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <i className="fas fa-code"></i>&nbsp;
                                                Website
                                            </h3>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 service-card service-card-one wow fadeInUp">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <i className="fas fa-gamepad"></i>&nbsp;
                                                Game
                                            </h3>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 service-card service-card-two wow fadeInUp">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <i className="fas fa-desktop"></i>&nbsp;
                                                Desktop
                                            </h3>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
