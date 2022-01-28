import React, { FunctionComponent, CSSProperties } from "react"


const CV: FunctionComponent = () => {

    const listStyles: CSSProperties = {
        listStyleType: "square",
        listStylePosition: "inside"
    }

    const titleHeaderStyles: CSSProperties = {
        fontWeight: 500,
        fontSize: "18px",
        marginTop: "10px"
    }

    const titleUnderHeaderStyles: CSSProperties = {
        fontWeight: 500,
        marginBottom: "5px"
    }

    const boxContainerStyles: CSSProperties = {
        margin: "10px 0 20px 0",
        paddingBottom: "16px",
        borderBottom: "2px solid #FE076A",
    }

    const employerStyles: CSSProperties = {
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: "8px"
    }

    return (
        <div>
            <h3 style={titleHeaderStyles}>Erhvervserfaring</h3> 
            <div style={boxContainerStyles}>
                <h4 style={titleUnderHeaderStyles}>Studentermedhjælper - Webudvikling (Deltid)</h4>
                <h5 style={employerStyles}>Den Uafhængige Aps | Sep 2021 - </h5>
                <ul style={listStyles}>
                    <li>Landingpages til projekter såsom kampagner, tilbud, støttesider mv.</li>
                    <li>Design og implementering af usability forbedringer til hjemmeside</li>
                    <li>Udarbejde af custom components til hjemmeside (F.eks. UserMentions, VideoPlayer etc. - React)</li>
                    <li>Grafisk design til SoMe kanaler på Facebook, Instagram, Twitter og hjemmeside.</li>
                </ul>
            </div>
            <div style={boxContainerStyles}>
                <h4 style={titleUnderHeaderStyles}>Apoteksmedhjælper / It-assistance (Fuldtid)</h4>
                <h5 style={employerStyles}>Sygehusapoteket Fyn OUH | Feb 2021 - Aug 2021</h5>
                <ul style={listStyles}>
                    <li>Opsætning af sharepoint arbejdsrum for afdelingens medarbejdere (CYT-ren, OUH)</li>
                    <li>Udarbejdelse af Excel-skabeloner til brug for afdelingens rengøringspersonale</li>
                    <li>Oplæring af rengøringsdamer i brugen af Sharepoint, Excel og vagtplanlægning.</li>
                    <li>Opsætning af nye arbejdstelefoner</li>
                    <li>Levering af kemokure til OUH kræftafdelinger</li>
                </ul>
            </div>
            <h3 style={titleHeaderStyles}>Uddannelse</h3> 
            <div style={boxContainerStyles}>
                <h4 style={titleUnderHeaderStyles}>Aalborg Universitet</h4>
                <h5 style={employerStyles}>Interaktionsdesign | Sept. 2020 - Feb. 2021</h5>
                <ul style={listStyles}>
                    <li>Problembaseret Læring</li>
                    <li>Grundlæggende Programmering</li>
                    <li>Usability og Skitsering</li>
                </ul>
            </div>
            <div style={boxContainerStyles}>
                <h4 style={titleUnderHeaderStyles}>Aalborg Universitet København</h4>
                <h5 style={employerStyles}>Teknoantropologi | Sept. 2021 - Nov. 2021</h5>
            </div>
        </div>
    )
}

export default CV