import React, { Component } from 'react'
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Special/Banner'
import OpenWords from "../components/Special/OpenWords";
import Quotes from "../components/Special/Quotes";
import Gallery from "../components/Special/Gallery";
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <OpenWords />
                <Quotes />
                <Gallery />
                <Footer />
            </React.Fragment>
        )
    }
}
