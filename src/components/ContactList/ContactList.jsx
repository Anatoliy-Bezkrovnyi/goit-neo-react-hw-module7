import { useEffect } from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";


const ContactList = () => { 

  const contacts = useSelector(state => state.contacts.contacts)  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

    const nameFilter = useSelector((state) => state.filters.name);
   
    const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameFilter.toLowerCase())
  );

    return  (        
        <ul className={styles.contactList}>
            {filteredContacts?.map((contact) => (
            <li key={contact.id}>
            <Contact {...contact} />
            </li>
      ))}
    </ul>
    );
}
 
export default ContactList;