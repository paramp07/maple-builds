import { Fragment } from "react";

import FooterComponent from "../sections/Footer";
import Header from "../sections/Header";
import Menu from "../sections/Menu";

export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            <Menu />
            <main className='z-1'>{props.children}</main>
            <FooterComponent />
        </Fragment>
    )
}