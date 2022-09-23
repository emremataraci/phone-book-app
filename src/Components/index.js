import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState ([
        {
            fullname: "Furkan",
            phone_number:"31"
        },
        {
            fullname: "Matar",
            phone_number:"32"
        },
        {
            fullname: "Enes",
            phone_number:"33"
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
  return (
    <div id="container">
        <h1>Contacts</h1>
      <List  contacts = {contacts}/>
      <Form  addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
