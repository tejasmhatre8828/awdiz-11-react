import React from "react";
import './DynamicStyles.css'

const DynamicStyles = () => {
    const [toggleClass, setToggleClass] = React.useState(false)
    const buttonStyle = toggleClass ? "active-button" : "inactive-button";
    const handleClick = () => {
        setToggleClass(!toggleClass)
    }
    return (
        <div>
            <button className={buttonStyle} onClick={handleClick}>
                {toggleClass ? "Active" : "Inactive"}
            </button>
            {toggleClass && "True"}
            <Button>Click Here.</Button>
        </div>
    )
}

const Button = ({ children }) => {
    return <button className="button">{children}</button>
}

export default DynamicStyles