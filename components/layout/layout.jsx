import { Fragment } from "react";

import FooterComponent from "../sections/Footer";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import Head from "next/head";

export default function Layout(props) {
    return (
        <Fragment>
            <Head>
                <meta name="theme-color" content="#171717" />

            </Head>
            <Header />
            <Menu />
            <main>{props.children}</main>
            <FooterComponent />
        </Fragment>
    )
}