// components/Layout.js

//head tile
import Head from "next/head";

//components
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

const Layout = props => (
    <div className="Layout" style={layoutStyle}>
        <Head>
            <title>StackingCoins</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        
        <Header />
        <div className="Content">
            {props.children}
        </div>
        <div>
            <NavBar />
        </div>
        <div>
            <Footer />
        </div>
        <style jsx>{`
            * {
                box-sizing: border-box;
            }

            html,
            body,
            #__next {
                height: 100%;
                width: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                font-family: "Courier"; sans-serif;
            }

            .Layout {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
            .Content {
                flex: 1;
                display: flex;
                flex-direction: column;
                font-family: "Courier New"; sans-serif;
            }
        `}</style>
    </div>    
);

export default Layout;