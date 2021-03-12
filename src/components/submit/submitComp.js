import React from 'react';
import './submitComp.css';
import {
    Link
} from "react-router-dom";
const submitComponent = () => {
    return (
        <div>
            <div className="submitLink">
                <Link to="/newLink">
                    <button className="button"> + </button>
                </Link>
                <h2 className="yazi"> Submit A Link</h2>
            </div>

        </div>
    );
}

export default submitComponent;