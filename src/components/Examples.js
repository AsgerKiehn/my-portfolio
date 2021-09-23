import React from 'react'

export default function Examples() {
    return (
        <div className="container">
            <div className="examples-container">

                {/* Example One */}
                <div className="examples-one-container">
                    <h3><strong>Eksempel 1</strong> </h3>
                    <div className="examples-one-video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nCOsmVM3cec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="examples-one-text-container">
                        <h4>Instagram</h4>

                        <p>Denne korte video består af et sammenklip af korte citater fra journalisterne fra forskellige episoder. Tanken er at give et klart billede af, hvad Den Uafhængige står for – nemlig kritisk og nysgerrig journalistik gennem spørgsmål der ikke afviger fra substansen i emnet. Videon kunne evt. forbedres ved at tilføje flere kortere klip kun med nøgleord.</p>
                        <p>Som afrunding på videoen har jeg tilføjet en kort outro som skal være med til at fortærke budskabet. </p>
                    </div>
                </div>

                {/* Exaxmple Two */}
                <div className="examples-one-container">
                    <h3><strong>Eksempel 2</strong> </h3>
                    <div className="examples-one-video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0bIv0MZk0Mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="examples-one-text-container">
                        <h4>Facebook / Youtube format</h4>

                        <p>Dette segment kan bestå af et kort udklip på 2-5 min. fra en interessant debat fra en nylig episode. Jeg har lagt lidt undertekster på i stil med det, der allerede kan findes på jeres Facebook-side. Man kunne måske lege med tanken om at tilføje en outro/intro eller et design der bygger bro over til jeres univers på App’en. Et sådan tiltag kan foretages på mange forskellige måder og på tværs af platforme. </p>
                        <p><strong>OBS:</strong> Jeg har forkortet videoen af tidsmæssige hensyn.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
