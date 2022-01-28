import React, { FunctionComponent } from "react"
import Introduction from "./Introduction"
import Ansoegning from "./Ansoegning"
import Drawer from "./Drawer/Drawer"
import CV from "./Drawer/CV"
import Footer from "./Footer"

const Page: FunctionComponent = () => {



    return (
        <>
            <Introduction/>
            <Ansoegning/>
            <Drawer title={"CV"}>
                <CV/>
            </Drawer>
            <Footer/>
        </>
    )
}

export default Page

