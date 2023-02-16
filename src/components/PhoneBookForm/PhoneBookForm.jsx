import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { customAlphabet } from 'nanoid';
import { addContact } from '../../redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selector';
import {
  Forma,
  Wrap,
  Label,
  Input,
  ErrorMes,
  Btn,
} from './PhoneBookForm.styled';

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
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma>
          <Wrap>
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" id="name" />
            <ErrorMes name="name" component="div"></ErrorMes>
          </Wrap>

          <Wrap>
            <Label htmlFor="number">Number</Label>
            <Input name="number" type="tel" id="number" />
            <ErrorMes name="number" component="div"></ErrorMes>
          </Wrap>
          <Btn type="submit">Add contact</Btn>
        </Forma>
      </Formik>
      <ToastContainer />
    </>
  );
}
