import { Formik, Form, Field } from 'formik';
import { useId } from 'react';

const ContactForm = ({onAdd}) => {

    const initialValues = {
        name: "",
        number: "",
        id: Date.now()
    };

    const nameFieldId = useId();
    const numberFieldId = useId();
    const keyId = useId();

    const handleSubmit = (values, actions) => {        
        onAdd(values)
        actions.resetForm();       
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                    <Field type="hidden" name="id" id={keyId} />
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />                
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="phone" name="number" id={numberFieldId}/>
                    <button type="submit">Add contact</button>
                </Form>
        </Formik>
    );
};

export default ContactForm;

