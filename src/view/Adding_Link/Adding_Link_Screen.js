import React, {useState} from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    Link
} from "react-router-dom";
import './Adding_Link.css';
import {useDispatch} from 'react-redux';
import {addLink} from '../../action';
function NewLink() {
    const[name, setName] = useState('');
    const[url, setUrl] = useState('');
    const dispatch = useDispatch();
    const onNameChangeHandler = (event) =>{
        setName(event.target.value)
    }
    const onUrlChangeHandler = (event) =>{
        setUrl(event.target.value)
    }
    return (
        <div className="newLink">
            <div>
            <div className="goBack">
                    <Link to="/">
                        <KeyboardBackspaceIcon />
                    </Link>
                <div>Return To List</div>
            </div>
            <h2>Add New Link </h2>
            <div>
            <p className="gereksiz">Link Name:</p>
            <input type="text" onChange={onNameChangeHandler}/>
            </div>
            <div>
            <p className="gereksiz">Link Url:</p>
            <input type="text" onChange={onUrlChangeHandler}/>
            </div>
            <button className="myButton" onClick={() => dispatch(addLink({ "name": name, "url": url, "points": 1 }))}>ADD</button>
            </div>
        </div>
    );
}
export default NewLink;