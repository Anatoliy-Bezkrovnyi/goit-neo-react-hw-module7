import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css'


const ContactForm = ({onAdd}) => {

    const initialValues = {
        name: "",
        number: "",          
    };

    const nameFieldId = useId();
    const numberFieldId = useId();
    

    const handleSubmit = (values, actions) => {        
        const newContact = {
      id: nanoid(), 
      ...values,   
    };
    onAdd(newContact); 
    actions.resetForm();      
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={styles.form}>
                    
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field className={styles.input} type="text" name="name" id={nameFieldId} />                
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field className={styles.input} type="phone" name="number" id={numberFieldId}/>
                    <button className={styles.button} type="submit">Add contact</button>
                </Form>
        </Formik>
    );
};

export default ContactForm;

