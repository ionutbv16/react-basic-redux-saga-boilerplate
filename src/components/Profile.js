import React from 'react'

export default  (props) => (
    <div>
        <div>Title: {props.user.name.title}</div>
        <div>First Name: {props.user.name.first}</div>
        <div>Last Name: {props.user.name.last}</div>
        <div>Telephone Number: {props.user.phone}</div>
        <div>Email: {props.user.email}</div>

    
    </div>
)