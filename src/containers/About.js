import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function About() {
    return (
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>Hii</h3>
                <p className="title text-justify mt-4 mb-4">
                    banana ba ba nana
                </p>
                <h4 className="text-success">from Nattapon</h4>
            </div>
            <Footer />
        </div>
    )
}

