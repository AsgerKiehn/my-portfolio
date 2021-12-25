import React from 'react'

export default function FormEmail() {
    return (
        <div>
            <form action="https://formsubmit.co/asgerkiehn@hotmail.com.com" method="POST">
                <input type="hidden" name="_next" value="https://duah.dk"/>
                <input type="email" name="email" required/>
                <input type="text" name="name" required/>
                <input type="text" name="besked" required placeholder="Skriv din besked her"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
