
import './App.module.css'
//import initialContacts from './contacts.json'
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import { useState, useEffect } from 'react'
import styles from './App.module.css'


function App() {
  
  const initialContacts = []

  const [contacts, setContacts] = useState(() => { return window.localStorage.getItem('contacts') ? JSON.parse(window.localStorage.getItem('contacts')) : initialContacts })
  const [filter, setFilter] = useState('')

  useEffect(() => { 
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => { 
    setContacts((previousContacts) => {
      return [...previousContacts, newContact]
    })
  }
  
  const deleteContact = (contactId) => { 
      setContacts((previousContacts) => {
      return previousContacts.filter(contact => contact.id !== contactId)
    })
   }

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  

  return (
    <>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} /> 
        <SearchBox value={filter} onFilter={setFilter} />
        {contacts.length > 0 ? (
          <ContactList contacts={filterContacts} onDelete={deleteContact} />
          ) : (
          <p>Your contact book is empty</p> 
          )}
      </div>
      
    </>
  )
}

export default App
