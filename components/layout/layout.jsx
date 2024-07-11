import { Fragment } from "react";

import FooterComponent from "../sections/Footer";
import Header from "../sections/Header";

export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main className='z-1'>{props.children}</main>
            <FooterComponent />
        </Fragment>
    )
}