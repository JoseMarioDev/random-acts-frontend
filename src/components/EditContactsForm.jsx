import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
const EditContactsForm = (props) => {
    const [contact, setContact] = useState(props.currentContact);


    const handleChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.updateContact(contact.id, contact)
       
    };
    return(
        <form onSubmit={handleSubmit}>  
            <input placeholder='name'
                   value={contact.name}
                   name='name'
                   onChange={handleChange}/>
            <input placeholder='email' 
                   value={contact.email}
                   name='email'
                   type='email'
                   onChange={handleChange}/>
            <input placeholder='phone' 
                   value={contact.phone}
                   name='phone'
                   type='tel'
                   onChange={handleChange}/>
            <input placeholder='address' 
                   value={contact.address}
                   name='address'
                   onChange={handleChange}/>
                   <button type='submit'>Update Contact</button>
                   <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    );
};

export default EditContactsForm;