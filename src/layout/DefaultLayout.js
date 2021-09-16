import React from 'react'
import { Footer } from './partials/Footer.compo'
import { Header } from './partials/Header.compo'
// import './'

export const DefaultLayout = ({children}) => {
    return (
        <div>
            <div className="default-layout">
                <header className="header mb-2">
                    <Header />
                </header>
                <main className="main">
                    {/* <h1>subjects to be added to main page frontend</h1> */}
                    {children}
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}
