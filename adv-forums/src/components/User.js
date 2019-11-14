import React from 'react';

function User({user}) {
    return(
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
            <p>Accepted Terms: {`${user.terms}`}</p>
        </div>
    );
}

export default User;