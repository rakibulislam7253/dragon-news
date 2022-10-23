import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div className='d-none d-lg-block'>
            <h1>All categories</h1>
            {
                categories.map(catagori =>
                    <p key={catagori.id} >
                        <Link to={`/cetagory/${catagori.id}`}>{catagori.name}</Link>
                    </p>)
            }
        </div>
    );
};

export default LeftSide;