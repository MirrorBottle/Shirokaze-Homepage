import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section id="about" className="py-5">
                <div className="container text-center">
                    <h1 className="display-4 font-weight-bold pt-3">About</h1>
                    <div className="row">
                        <div className="col-md-7 d-none d-md-block d-lg-block d-xl-block">
                            <img src='/static/about.svg' alt="ShiroKaze About" className="img-fluid mt-3" />
                        </div>
                        <div className="col-md-5 col-12 text-left">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci asperiores quis error hic id recusandae minima consequuntur soluta cumque rem suscipit est libero, assumenda natus! Totam amet doloremque praesentium?</p>
                            <a href="#d" className="mt-3 about-school-btn text-decoration-none">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3 d-flex justify-content-center align-items-center">
                                                <i className="fas fa-school fa-4x"></i>
                                            </div>
                                            <div className="col-9">
                                                <h2 className="font-weight-bold mt-3 text-decoration-none">Our School</h2>
                                                <p className="text-muted text-decoration-none">Click to view it's location</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
