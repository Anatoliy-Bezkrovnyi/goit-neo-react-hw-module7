import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";


const ContactList = ({ contacts, onDelete }) => { 

    return  (
        <div className={styles.contactList}>
            {contacts.map(item => <Contact key={item.id} id={item.id} name={item.name} number={item.number} onDelete={() => onDelete(item.id)}/>)}
        </div>
    );
}
 
export default ContactList;