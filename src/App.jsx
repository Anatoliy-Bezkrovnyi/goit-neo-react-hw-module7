
import './App.module.css'
import initialContacts from './contacts.json'
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import { useState } from 'react'


function App() {
  
  const [contacts, setContacts] = useState(initialContacts)

  const addContact = (newContact) => { 
    setContacts((previousContacts) => {
      return [...previousContacts, newContact]
    })
  }
  
  const deleteContact = (taskId) => { 
    
   }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>      
      <ContactList contacts={contacts}/>
    </>
  )
}

export default App
