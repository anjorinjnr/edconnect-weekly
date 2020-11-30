import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
export default (props) => {
    return (
        <>
        <Header user={props.user} />
        <main className="mx-auto">
            { props.children}
        </main>

        <Footer />

        </>
    )
}