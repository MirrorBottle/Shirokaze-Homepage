import React from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
export default class Banner extends React.Component {
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
            <div className="jumbotron jumbotron-fluid bg-white ptb-100 home-banner">
                <div className="container ptb-100">
                    <div className="row ">
                        <div className="col-md-5 col-12 d-flex flex-column align-items-center wow fadeInLeft">
                            <h1 className="font-weight-bold display-4">We Code Just For Fun.</h1>
                            <p className="text-muted">Enthusiastic is what we are. Our works represent our hard work and creativities. Basically, coding is the way we express ourself to the world</p>
                            <div className="d-flex justify-content-start w-100">
                                <button className="btn btn-black mr-3">Know More</button>
                                <button className="btn btn-white">
                                    <i className="fas fa-envelope"></i>&nbsp;
                                Contact Us
                            </button>
                            </div>
                        </div>
                        <div className="col-md-7 col-12 d-sm-none d-none d-md-block d-lg-block d-xl-block wow fadeInRight">
                            <img src={require('./../../assets/images/banner.svg')} alt="ShiroKaze Banner" className="img-fluid w-100 h-100" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
