import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectError, selectLoading, selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {


  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const filteredContacts = useSelector(selectFilteredContacts);


  return (
    <>
        { isLoading && <p>Loading...</p>}
        {error && <p>Ooops, something went wrong ... {error}</p> } 
        <ul className={styles.contactList}>
            {filteredContacts?.map((contact) => (
            <li key={contact.id}>
            <Contact {...contact} />
            </li>
            ))}
        </ul>
  </>        
    );
}
 
export default ContactList;