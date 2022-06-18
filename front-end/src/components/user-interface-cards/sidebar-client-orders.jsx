import React from "react";

const SidebarClientOrder = (props) => {
    return (
        <>
            <div className="client-order-info-row">
                <img src={props.icon} alt="package-icon" />
                <p>{props.text}</p>
            </div>
        </>
    );
}

export default SidebarClientOrder;