import style from './Contact.module.css'

const Contact = ({name, number, onDelete}) => { 

    return (
        <div className={style.contactCard}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{number}</p>
            <button className={style.button} onClick={onDelete}>Delete</button>
        </div>
    );
}
 
export default Contact;