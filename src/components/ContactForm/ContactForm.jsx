import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import styles from './ContactForm.module.css'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
      .trim()
      .matches(/^[0-9+-]+$/, "Only numbers and symbols + and - are allowed")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required")
});


const ContactForm = () => {
    
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: "",          
    };

    const nameFieldId = useId();
    const numberFieldId = useId();
    

    const handleSubmit = (values, actions) => {        
        const newContact = {      
      ...values,   
    };
    
    dispatch(addContact(newContact)); 
    actions.resetForm();      
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className={styles.form}> 
                <div className={styles.input}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field className={styles.inputField} type="text" name="name" id={nameFieldId} /> 
                    <ErrorMessage className={styles.error} name="name" component="span" />
                </div>
                <div className={styles.input}> 
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field className={styles.inputField} type="phone" name="number" id={numberFieldId} />
                    <ErrorMessage className={styles.error} name="number" component="span" />
                </div>                    
                    <button className={styles.button} type="submit">Add contact</button>
                </Form>
        </Formik>
    );
};

export default ContactForm;

