import './App.module.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps'
import styles from './App.module.css'



function App() {  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm /> 
        <SearchBox/>        
        <ContactList/>          
      </div>
      
    </>
  )
}

export default App