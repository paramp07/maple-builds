import { Fragment } from "react";

import FooterComponent from "../sections/Footer";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import Head from "next/head";

export default function Layout(props) {
    return (
        <Fragment>
            <Head>
                <meta name="theme-color" content="#00FFFFFF" />

            </Head>
            <Header />
            <Menu />
            <main className='z-1'>{props.children}</main>
            <FooterComponent />
        </Fragment>
    )
}