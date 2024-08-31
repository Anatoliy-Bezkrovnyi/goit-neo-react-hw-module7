import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => { 

    return  (
        <div className={styles.contactList}>
           {contacts.map(item=><Contact key={item.id}  name={item.name} number={item.number}/>)}
        </div>
    );
}
 
export default ContactList;