import React from "react";
import Navbar from "../menu/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="layout">
            <header>
                <Header/>
            </header>

            <aside>
                <Navbar/>
            </aside>

            <main>
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>
        </section>
    )

}

export default Layout;