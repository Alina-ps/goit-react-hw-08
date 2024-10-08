import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <div className={s.contactListWrapper}>
      <ul className={s.list}>
        {filteredData.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
