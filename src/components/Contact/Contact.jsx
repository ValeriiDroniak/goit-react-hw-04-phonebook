import PropTypes from 'prop-types';
import { Button, ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem>
      <p>{name}:</p>
      <p>{number}</p>
      <Button name={id} type="Button" onClick={deleteContact}>
        Deleted
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
