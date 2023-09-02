import { Fragment } from "react";
import MainHeader from "./main-header";
import Footer from "../sections/Footer";

export default function Layout(props) {
    return (
        <Fragment>
            <MainHeader />
            <main className='z-1'>{props.children}</main>
            <Footer />
        </Fragment>
    )
}