import React, {useState} from 'react';
import './userProfile.css'
import {useSelector, useDispatch} from 'react-redux';
import {changePoint} from '../../../action/changePoint';
import {deleteItem, updadeItem} from '../../../action';
const UserProfile = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    return (
        <div>
            <div className="links" onMouseEnter={() => setValue(1)} onMouseLeave={() => setValue(0)}>
                <div className="point">{props.points} POINTS</div>
                <div>
                    {props.isim}
                    <h6 className="subTitle">{props.url}</h6>
                    <button onClick={() => dispatch(updadeItem(props.isim,1))}>up vote</button>
                    <button onClick={() => dispatch(updadeItem(props.isim,-1))}>down vote</button>
                    <button style={{opacity: value}} className="myButton1" onClick={() => dispatch(deleteItem(props.isim))}>Kaldır</button>
                    </div>
                
            </div>

        </div>
    );
}

export default UserProfile  ;