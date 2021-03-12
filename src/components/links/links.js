import React from 'react';
import { useState } from 'react';
import UserProfile from './user/userProfile';
import Pagination from '@material-ui/lab/Pagination';
import './links.css';
import {useSelector} from 'react-redux';

const Links = () => {

    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value)
    }
    const myLinks = useSelector(state => state.add).arr;
    localStorage.setItem('Liste', JSON.stringify(myLinks));
    let liste = myLinks.map((link, index) => <UserProfile key={index} points={link.points} isim={link.name} url={link.url} />)
 
    let newListe = [];
    switch (page) {
        case (1):
            newListe = liste.slice(0, 3)
            break;
        case (2):
            newListe = liste.slice(3, 6)
            break;
        case (3):
            newListe = liste.slice(6, 9)
            break;

    }
    return (
        <div>
            <ul>
            {newListe}
            </ul>
            <div className="myPagination">
                <Pagination count={myLinks.length <= 3 ? 1 : myLinks.length <= 6 ? 2 : myLinks.length <= 9 ? 3: 0} color="primary" page={page} onChange={handleChange} />
            </div>
        </div>
    );

}

export default Links;