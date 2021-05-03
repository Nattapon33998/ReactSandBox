import React from 'react'
import Header from "../../component/Header";
import Footer from "../../component/Footer";
export default function NotFound() {
    return (
        <div>
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="mt-5" style={{fontSize: 120}}>404</h1>
                <h2 className="mb-4">Not Found</h2>
                <p className="title mb-5">*****</p>
            </div>
            <Footer />
        </div>
    )
}
