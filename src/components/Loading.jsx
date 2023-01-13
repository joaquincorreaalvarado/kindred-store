import React from "react";

const Loading = ({items}) => {
    return(
        <div className="container">
            <div className="row">
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Loading; 
