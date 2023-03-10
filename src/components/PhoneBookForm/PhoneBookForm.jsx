import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { customAlphabet } from 'nanoid';
import { addContact } from '../../redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selector';
import { Button } from '../App.styled';
import { Container, Section, BlockForm, Label, Input } from '../App.styled';
import { ErrorMes } from './PhoneBookForm.styled';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.string().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export default function PhoneBookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id' + nanoid(),
      name: values.name.trim(),
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return toast.error(`${newContact.name} already exists`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <BlockForm>
              <Label htmlFor="name">Name</Label>
              <Input name="name" type="text" id="name" />
              <ErrorMes name="name" component="div"></ErrorMes>

              <Label htmlFor="number">Number</Label>
              <Input name="number" type="tel" id="number" />
              <ErrorMes name="number" component="div"></ErrorMes>

              <Button type="submit">Add contact</Button>
            </BlockForm>
          </Form>
        </Formik>
        <ToastContainer />
      </Section>
    </Container>
  );
}
