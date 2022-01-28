import React, { useState, FunctionComponent, CSSProperties } from "react"

interface DrawerProps {
    title: string
}

const Drawer: FunctionComponent<DrawerProps> = ({children, title}) => {

    /**
    * Style
    */

    const containerStyles: CSSProperties = {
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 30px"
    }

    const buttonStyles: CSSProperties = {
        width: "100%",
        outline: "none",
        border: "none",
        backgroundColor: "#008DE5",
        color: "#ffffff",
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "Lato, Roboto",
        fontWeight: "bold",
        padding: "10px 1px",
        margin: "5px 0",
        fontSize: "16px",
        borderRadius: "6px"
    }

    const titleStyles: CSSProperties = {
        paddingLeft: "10px"
    }

    const collapsableIconRightStyles: CSSProperties = {
        width: "10px",
        float: "right",
        marginTop: "4px",
        marginRight: "20px"
    }
    
    const collapsableIconDownStyles: CSSProperties = {
        width: "15px",
        float: "right",
        marginTop: "4px",
        marginRight: "20px"
    }

    /**
    * State
    */
    const [isOpen, setIsOpen] = useState(true) 

    /**
    * Logic
    */
    const handleCollapsable = () => {
            setIsOpen((prev) => !prev);
    };
        
    return (
        <div style={containerStyles}>
            <button type="button" onClick={handleCollapsable} style={buttonStyles}>
                <span style={titleStyles}>{title}</span>
                {isOpen ?  <img src="/chevron-right-solid.svg" alt="a" style={collapsableIconRightStyles}/> : <img alt="a" src="/chevron-down-solid.svg" style={collapsableIconDownStyles}/>}
            </button>

            <div>
                <div >{!isOpen && <div >{children}</div>}</div>
            </div>    
        </div>
    )
}

export default Drawer 