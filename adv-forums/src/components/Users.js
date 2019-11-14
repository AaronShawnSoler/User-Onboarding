import React from 'react';
import User from './User';

function Users({data}) {
    return(
        <div>
            {data.map((element, index) => <User user={element} key={index}/>)}
        </div>
    );
}

export default Users;