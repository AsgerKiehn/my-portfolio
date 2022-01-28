import React, { FunctionComponent, CSSProperties } from "react"
import { Media, MediaContextProvider } from "./util/Media"

const Introduction: FunctionComponent = () => {


    const containerStyles: CSSProperties = {
        width: "100%",
        padding: "30px",
        maxWidth: "1000px",
        margin: "0 auto"
    }

    const boxContainerStyles: CSSProperties = {
        display: "flex",
        justifyContent: "space-between"
    }
    const boxContainerSmallStyles: CSSProperties = {
        display: "block",
    }

    const videoPlaceholder: CSSProperties = {
        width: "500px",
        height: "380px",
        
    }

    const textBoxContainer: CSSProperties = {
        maxWidth: "400px",
        height: "380px",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "6px"
    }

    const titleContainerStyles: CSSProperties = {
        margin: "10px 0 30px 0",
        backgroundColor: "#007FCE",
        color: "#ffffff",
        padding: "20px 15px",
        borderRadius: "6px"
    }

    const titleHeadingStyle: CSSProperties = {
        fontSize: "20px",
        fontWeight: 600,
        paddingBottom: "4px",
        borderBottom: "6px solid #FFF27E",
        display: "inline-block",
        marginBottom: "8px"
    }

    const titleHeadingTextBoxStyle: CSSProperties = {
        fontSize: "16px",
        fontWeight: 500,
        margin: "5px 0"
    }

    const introductionContainerStyles: CSSProperties = {

    }

    return (
        <>
            <MediaContextProvider>
                <div style={introductionContainerStyles}>
                    <div style={containerStyles}>
                        <div style={titleContainerStyles}>
                            <h2 style={titleHeadingStyle}>Ansøgning til Intelligent Banker</h2>
                            <h4>- Full-Stack Developer</h4>
                        </div>
                        <Media greaterThanOrEqual="md">
                            <div style={boxContainerStyles}>
                                <div style={videoPlaceholder}>
                                    <img src="/asger.PNG" alt="a" style={{width: "500px", height: "380px", objectFit: "cover", borderRadius: "6px"}}/>
                                </div>
                                <div style={textBoxContainer}>
                                    <h2 style={titleHeadingTextBoxStyle}>Om mig</h2>
                                    <p>Mit navn er Asger Kiehn. Jeg er en ung mand på 23 år. Da jeg lige er flyttet tilbage til Odense, står jeg og mangler en ny udfordring. Jeg søger et arbejde hvor jeg kan fortsætte min udvikling, ved at skubbe til mine grænser og hvor jeg kan suge ny viden til mig.</p>
                                    <p style={{marginTop: "20px"}}>Jeg har i sinde at starte på en mere teknisk uddannelse end tidligere. Derfor forventer jeg at starte på en relevant videregående uddannelse til sommer - enten Datamatiker, Datalogi eller Softwareudvikling.</p>
                                </div>
                            </div>
                        </Media>
                        <Media lessThan="md">
                            <div style={boxContainerSmallStyles}>
                                <img src="/asger.PNG" alt="a" style={{width: "400px", height: "380px", objectFit: "cover", borderRadius: "6px"}}/>
                                <div style={textBoxContainer}>
                                    <h2 style={titleHeadingTextBoxStyle}>Om mig</h2>
                                    <p>Mit navn er Asger Kiehn. Jeg er en ung mand på 23 år. Da jeg lige er flyttet tilbage til Odense, står jeg og mangler en ny udfordring. Jeg søger et arbejde hvor jeg kan fortsætte min udvikling, ved at skubbe til mine grænser og hvor jeg kan suge ny viden til mig. </p>
                                    <p style={{marginTop: "20px"}}>Jeg forventer at starte på en relevant videregående uddannelse til sommer - enten Datamatiker, Datalogi eller Softwareudvikling.</p>
                                </div>
                            </div>
                        </Media>
                    </div>
                </div>
            </MediaContextProvider>
        </>
    )
}

export default Introduction