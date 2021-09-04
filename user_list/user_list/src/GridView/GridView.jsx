import React from 'react';

import { list } from '../RandomUser/UsersList.js';

import './GridView.css'

export const GridView = (post)=> 
        
      (
        <div className="row gridView">
            {list[0].results.map( (post, index) => 
            {
            const {picture, name, dob, email} = post;
            const nameFrom = `${name.first.charAt(0).toUpperCase()}${name.first.slice(1)} ${name.last.charAt(0).toUpperCase()}${name.last.slice(1)}`;
            const dateForm = `${dob.date.slice(8,10)}-${dob.date.slice(5,7)}-${dob.date.slice(0,4)}`
            let  hiddenEmail = email.split('@');
            hiddenEmail = `${hiddenEmail[0].slice(0, 3)}...@${hiddenEmail[1]}`
            
            return(
            
                    <div className="col s4" key={index}>
                    <div className="card">
                        <div className="card-image">
                         <img src={picture.medium} alt="avatar"></img>
                            <span className="card-title">{name.first}</span>
                         </div>
                        <div className="card-content">
                    <p>Name: {hiddenEmail}</p>
                    <p>Date of birth: {dateForm}</p>
                    </div>
                    
                </div>
                </div>
            
            )
            
            })}
            
                
        </div>
        );
