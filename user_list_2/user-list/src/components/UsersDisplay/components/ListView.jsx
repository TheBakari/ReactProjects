import React from 'react';

export const ListView = ({users}) =>{
    //console.log(props)
    return (
        <ul className="collection">
            {users.map(({ name,picture }) => (
                        <li className="collection-item avatar">
                            <img src={picture.thumbnail} alt="" className="circle"/>
                            <span className="title">{name.first}</span>
                            
                        </li>
                    )
                )}
        </ul>
    )
}