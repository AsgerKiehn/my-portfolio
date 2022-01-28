import React, { FunctionComponent, CSSProperties } from "react"

const Footer: FunctionComponent = () => {

    const footerContainerStyles: CSSProperties = {
        backgroundColor: "#007FCE",
        marginTop: "50px",
        color: "#ffffff",
        position: "relative"
    }

    const containerStyles: CSSProperties = {
        maxWidth: "1000px",
        margin: "140px auto 0 auto",
        padding: "100px 30px 40px 30px"
    }

    const skewedDivStyles: CSSProperties = {
        height: "60px",
        width: "100%",
        backgroundColor: "#019EFF",
        position: "absolute",
        top: "-20px",
        transform: "skewY(-1.6deg)"
    }

    return (
        <div style={footerContainerStyles}>
            <div style={skewedDivStyles}> </div>
            <div style={containerStyles}>
                <h3><strong>Telefon:</strong> 42 40 91 35</h3>
                <h3><strong>E-mail:</strong> asgerkiehn@hotmail.com</h3>
                <h3><strong>Adresse:</strong> Bjergegade 38 st. 5000 Odense C</h3>
            </div>
        </div>
    )
}

export default Footer