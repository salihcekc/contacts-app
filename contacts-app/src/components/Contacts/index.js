import {useEffect, useState} from 'react'
import './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname : "Mehmet",
            phone_number : "123354"
        },
        {
            fullname : "Aslı",
            phone_number : "4324234"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

  return (
    <div id = "container">
        <h1>Contacts</h1>
      <List contacts = {contacts} />
      <Form addContact = {setContacts} contacts = {contacts} />
    </div>
  )
}

export default Contacts
