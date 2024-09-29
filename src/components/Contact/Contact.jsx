import style from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsOps'

const Contact = ({id, name, number}) => { 

    const dispatch = useDispatch()

    const removeContact = () => { 
      dispatch(deleteContact(id))
    }

    return (
        <div className={style.contactCard}>
            <div className={style.contactInfo}>
                <div className={style.name}>
                    <FaUser />
                    <p >{name}</p>
                </div>
                <div className={style.number}>
                    <FaPhone />
                    <p >{number}</p>
                </div>
                
            </div>
            
            <button className={style.button} onClick={removeContact}>Delete</button>
        </div>
    );
}
 
export default Contact;