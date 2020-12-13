import React from 'react';

export default function User({user}){
    
    return(
    <>
        <img src={user.picture.large} />
        <h1>{user.name.first}</h1>  
    </>
    )

}