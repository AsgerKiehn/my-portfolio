import React, { FunctionComponent, CSSProperties } from "react"
import { Media, MediaContextProvider } from "./util/Media"

const Ansoegning: FunctionComponent = () => {

    const containerStyles: CSSProperties = {
        width: "100%",
        padding: "0 30px 30px 30px",
        maxWidth: "1000px",
        margin: "0 auto"
    }

    const titleHeadingStyles: CSSProperties = {
        fontSize: "18px",
        fontWeight: 500,
        padding: "10px 10px",

    }

    const titleUnderHeadingStyles: CSSProperties = {
        fontSize: "16px",
        fontWeight: 500,
        marginBottom: "6px"
    }

    const textBoxContainerStyles: CSSProperties = {
        maxWidth: "500px",
        margin: "15px 0"
    }

    const textBoxStyles: CSSProperties = {
        marginBottom: "30px"
    }

    const outerTextBoxContainerStyles: CSSProperties = {

    }

    const outerContainerStyles: CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px"
    }

    const competenceContainerStyles: CSSProperties = {
        maxWidth: "300px",
        maxHeight: "400px",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto"
    }


    const imageStyles: CSSProperties = {
        width: "100px",
        height: "100px",
        borderRadius: "6px",
        margin: "10px"
    }

    return (
        <MediaContextProvider>
            <div style={containerStyles}>
                <div style={{backgroundColor: "#008DE5", color: "white", borderRadius: "6px"}}>
                    <h1 style={titleHeadingStyles}>Ansøgning</h1>
                </div>
                <div style={outerContainerStyles}>
                    <div style={outerTextBoxContainerStyles}>
                        <div style={textBoxContainerStyles}>
                            <h2 style={titleUnderHeadingStyles}>Erfaring</h2>
                            <p style={textBoxStyles}> På nuværende tidspunkt arbejder jeg som studentermedhjælper hos Den Uafhængige Aps. Her har jeg været inde over forskellige projekter såsom kampagner, tilbud, støttesider (medlemstilmelding) mv. Jeg har i denne process bl.a. udarbejdet landingpages, ny funktionalitet, grafisk design og custom components til hjemmesiden. Derudover har jeg stået for en større restrukturering af hjemmesiden, hvor fokus har været på at strømline designet, forbedre brugeroplevelsen og tilføje funktionalitet.</p>
                        </div>
                        <div style={textBoxContainerStyles}>
                            <h2 style={titleUnderHeadingStyles}>Kompetencer</h2>
                            <p style={textBoxStyles}> Det ovenstående arbejde er hovedsageligt udført i JavaScript, React, HTML5, CSS og TypeScript. Andre teknologier såsom PostgreSQL og GraphQL er endvidere blevet anvendt, men her har jeg endnu ikke været inde over i et omfattende udstræk. Det vil sige, at det primært er frontend teknologier jeg har haft med at gøre.</p>
                        </div>
                        <div style={textBoxContainerStyles}>
                            <h2 style={titleUnderHeadingStyles}>Future</h2>
                            <p style={textBoxStyles}> It’s my objective and dream to become a skilled full-stack developer who has “all-round” qualities. In order to reach my goals I intend to learn by trying to solve challenging tasks, problems and through education. I also wish to place myself in a suitable environment with competent co-workers, so that I can grow as a professional and individual.  </p>
                        </div>
                    </div>
                    <Media greaterThanOrEqual="md">
                        <div style={competenceContainerStyles}>
                            <img style={imageStyles} src="/react.png" alt="a"/>
                            <img style={imageStyles} src="/javascript.png" alt="a"/>
                            <img style={imageStyles} src="/typescript.png" alt="a"/>
                            <img style={imageStyles} src="/html5.png" alt="a"/>
                            <img style={imageStyles} src="/css.jpg" alt="a"/>
                            <img style={imageStyles} src="/adobe.png" alt="a"/>
                        </div>
                    </Media>

                </div>
            </div>
        </MediaContextProvider>
    )
}

export default Ansoegning